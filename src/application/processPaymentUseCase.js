import Payment from "../domain/Payment.js";
import { pool } from "../infrastructure/database.js";

export const processPayment = async (orderId, userId, amount, paymentGateway) => {
  const payment = new Payment({ orderId, userId, amount, status: "PENDING" });

  const isApproved = await paymentGateway.charge(amount);
  isApproved ? payment.approve() : payment.reject();

  const result = await pool.query(
    "INSERT INTO payments (order_id, user_id, amount, status) VALUES ($1, $2, $3, $4) RETURNING *",
    [payment.orderId, payment.userId, payment.amount, payment.status]
  );

  payment.id = result.rows[0].id;
  return payment;
};
