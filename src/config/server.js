import express from "express";
import { processPaymentController } from "../presentation/paymentController.js";

const app = express();
app.use(express.json());

app.post("/payments", processPaymentController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
