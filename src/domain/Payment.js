class Payment {
    constructor({ id, orderId, userId, amount, status }) {
      this.id = id;
      this.orderId = orderId;
      this.userId = userId;
      this.amount = amount;
      this.status = status;
    }
  
    approve() {
      this.status = "APPROVED";
    }
  
    reject() {
      this.status = "REJECTED";
    }
  }
  
  export default Payment;
  