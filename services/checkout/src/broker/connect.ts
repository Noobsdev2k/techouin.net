import { messageBroker } from '@/broker/message-broker'
import { Consumer, Producer } from 'kafkajs'

//connect broker
export async function ConnectBroker() {
  const producer = await messageBroker.connectProducer<Producer>()
  producer.on('producer.connect', () => {
    console.log('producer connected')
  })

  const consumer = await messageBroker.connectConsumer<Consumer>()
  consumer.on('consumer.connect', () => {
    console.log('consumer connected')
  })

  await messageBroker.subscribe((message) => {
    console.log('message received: ', message)
  }, 'OrderEvents')
}
