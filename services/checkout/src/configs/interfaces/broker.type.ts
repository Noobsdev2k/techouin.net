import { OrderEvent, TOPIC_EVENT } from '@/utils'

export type MessageBrokerType = {
  //producer
  connectProducer: <T>() => Promise<T>
  disconnectProducer: () => Promise<void>
  publish: (data: unknown) => Promise<boolean>

  //consumer
  connectConsumer: <T>() => Promise<T>
  disconnectConsumer: () => Promise<void>
  subscribe: (messageHandler: MessageBrokerType, Topic: string) => Promise<void>
}

export interface PublishType {
  headers: Record<string, any>
  topic: TOPIC_EVENT
  event: object | unknown | OrderEvent
  message: Record<string, any>
}

export type MessageHandler = (input: MessageType) => void

export interface MessageType {
  headers?: Record<string, any>
  event: object | unknown | OrderEvent
  data: Record<string, any>
}
