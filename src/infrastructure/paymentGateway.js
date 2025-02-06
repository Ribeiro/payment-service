export const paymentGateway = {
    charge: async (amount) => {
      console.log(`🔄 Processando pagamento de R$${amount}...`);
      return Math.random() > 0.2; // Simula 80% de aprovação
    },
  };
  