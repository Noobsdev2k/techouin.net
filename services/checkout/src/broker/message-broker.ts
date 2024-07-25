import { MessageBrokerType, MessageHandler, MessageType, PublishType } from '@/configs/interfaces/broker.type'

import config from '@/configs/config'
import { Consumer, Kafka, logLevel, Partitioners, Producer } from 'kafkajs'
import { OrderEvent, TOPIC_EVENT } from '@/utils'
const {
  kafka: { client_id, group_id, broker }
} = config
const CLIENT_ID = client_id || 'Checkout_service'
const GROUP_ID = group_id || 'Checkout_service_group'
const BROKERS = [broker || 'localhost:9094']

const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: BROKERS,
  logLevel: logLevel.INFO
})

let producer: Producer
let consumer: Consumer

const createTopic = async (topic: string[]) => {
  const topics = topic.map((t) => ({
    topic: t,
    numPartitions: 2,
    replicationFactor: 1
  }))
  const admin = kafka.admin()
  await admin.connect()
  const topicExits = await admin.listTopics()
  for (const t of topics) {
    if (!topicExits.includes(t.topic)) {
      await admin.createTopics({
        topics: [t]
      })
    }
  }

  await admin.disconnect()
}

const connectProducer = async <T>(): Promise<T> => {
  await createTopic(['OrderEvents'])
  if (!producer) {
    producer = kafka.producer()
  }
  producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
  })

  await producer.connect()
  return producer as unknown as T
}

const disconnectProducer = async (): Promise<void> => {
  if (producer) {
    await producer.disconnect()
  }
}

async function publish(data: PublishType): Promise<boolean> {
  const producer = await connectProducer<Producer>()

  const result = await producer.send({
    topic: data.topic,
    messages: [
      {
        headers: data.headers,
        key: data.event as string,
        value: JSON.stringify(data.message)
      }
    ]
  })
  return !result
}

async function connectConsumer<T>(): Promise<T> {
  if (consumer) return consumer as unknown as T
  consumer = kafka.consumer({ groupId: GROUP_ID })
  await consumer.connect()
  return consumer as unknown as T
}

async function disconnectConsumer(): Promise<void> {
  if (consumer) {
    await consumer.disconnect()
  }
}

async function subscribe(messageHandler: MessageHandler, Topic: TOPIC_EVENT): Promise<void> {
  const consumer = await connectConsumer<Consumer>()

  await consumer.subscribe({ topic: Topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (topic !== 'OrderEvents') {
        return
      }
      if (message.key && message.value) {
        const inputMessage: MessageType = {
          headers: message.headers,
          event: message.key.toString() as OrderEvent,
          data: message.value ? JSON.parse(message.value.toString()) : null
        }
        await messageHandler(inputMessage)

        await consumer.commitOffsets([{ topic, partition, offset: (Number(message.offset) + 1).toString() }])
      }
    }
  })
}

export const messageBroker: MessageBrokerType = {
  connectProducer,
  disconnectProducer,
  publish,
  connectConsumer,
  disconnectConsumer,
  subscribe
}
