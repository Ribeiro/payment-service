export const notifyPaymentStatus = async (payment, eventPublisher) => {
    const event = {
      orderId: payment.orderId,
      userId: payment.userId,
      amount: payment.amount,
      status: payment.status,
      timestamp: new Date().toISOString(),
    };
  
    await eventPublisher.publish("payments", event);
  };
  