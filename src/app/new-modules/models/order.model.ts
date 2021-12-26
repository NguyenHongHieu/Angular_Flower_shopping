export class  OrderModel{
    id: number;
    date: Date;
    totalAmount: number;
    customerId: number;
    status: number; // created, pending, delivering, ....
  
    // orderDetail: OrderDetailModel[]
  }
  
  export class OrderDetailModel{
    orderId: number;
    flowerId: number;
    quantity: number;
    price: number;
    totalAmount: number;
  }