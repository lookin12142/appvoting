import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'votaapp',
  brokers: ['161.132.40.126:29092'],
});

const producer = kafka.producer();

export const produceMessage = async (message: any) => {
  await producer.connect();
  await producer.send({
    topic: 'votaciones',
    messages: [
      { value: JSON.stringify(message) },
    ],
  });
  await producer.disconnect();
};
