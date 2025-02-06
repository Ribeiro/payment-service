import { kafka } from "../config/kafka.js";

export const eventPublisher = {
  publish: async (topic, message) => {
    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    await producer.disconnect();
    console.log(`📢 Evento enviado para Kafka: ${JSON.stringify(message)}`);
  },
};
