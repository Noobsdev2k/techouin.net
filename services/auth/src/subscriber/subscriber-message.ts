import { BusinessLogicError } from '@/api/middlewares'
import amqp, { Channel, Connection, ConsumeMessage } from 'amqplib'
import config from '@/configs/config'
import { v4 as uuid4 } from 'uuid'
const { rabbitmq: amqpUri } = config
const AMQP_URI = amqpUri || 'amqp://guest:guest@localhost:5672/'

export async function getChannel(): Promise<Channel> {
  try {
    const connection: Connection = await amqp.connect(AMQP_URI as any)
    if (!connection) throw new BusinessLogicError('Connect not established')

    const channel: Channel = await connection.createChannel()
    return channel
  } catch (err) {
    console.error(err)
    throw err // Rethrow the error after logging it
  }
}

export const RPCObserver = async (RPC_QUEUE_NAME: string, service: any): Promise<void> => {
  const channel: Channel = await getChannel()

  await channel.assertQueue(RPC_QUEUE_NAME, {
    durable: false
  })
  channel.prefetch(1)
  channel.consume(
    RPC_QUEUE_NAME,
    async (msg: any) => {
      if (msg.content) {
        // DB Operation
        const payload = JSON.parse(msg.content.toString())
        const response = await service.serveRPCRequest(payload)

        channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
          correlationId: msg.properties.correlationId
        })
        channel.ack(msg)
      }
    },
    {
      noAck: false
    }
  )
}

interface RequestPayload {
  // Define the shape of requestPayload if possible
  [key: string]: any
}

const requestData = async (RPC_QUEUE_NAME: string, requestPayload: RequestPayload, uuid: string): Promise<any> => {
  try {
    const channel: Channel = await getChannel()

    const q = await channel.assertQueue('', { exclusive: true })

    channel.sendToQueue(RPC_QUEUE_NAME, Buffer.from(JSON.stringify(requestPayload)), {
      replyTo: q.queue,
      correlationId: uuid
    })

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        channel.close()
        resolve('API could not fulfill the request!')
      }, 8000)

      channel.consume(
        q.queue,
        (msg: ConsumeMessage | null) => {
          if (msg && msg.properties.correlationId === uuid) {
            resolve(JSON.parse(msg.content.toString()))
            clearTimeout(timeout)
          } else {
            reject('Data not found!')
          }
        },
        {
          noAck: true
        }
      )
    })
  } catch (error) {
    console.error(error)
    return 'error'
  }
}

export const RPCRequest = async (RPC_QUEUE_NAME: string, requestPayload: RequestPayload) => {
  const uuid = uuid4() // correlationId
  return await requestData(RPC_QUEUE_NAME, requestPayload, uuid)
}
