import { processPayment } from "../application/processPaymentUseCase.js";
import { notifyPaymentStatus } from "../application/notifyPaymentStatusUseCase.js";
import { paymentGateway } from "../infrastructure/paymentGateway.js";
import { eventPublisher } from "../infrastructure/eventPublisher.js";

export const processPaymentController = async (req, res) => {
  try {
    const { orderId, userId, amount } = req.body;

    const payment = await processPayment(orderId, userId, amount, paymentGateway);
    await notifyPaymentStatus(payment, eventPublisher);

    res.status(200).json({ message: "Pagamento processado", payment });
  } catch (error) {
    console.error("Erro ao processar pagamento:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};
