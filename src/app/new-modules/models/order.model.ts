export class OrderModel {
  id: number;
  date: Date;
  totalAmount: number;
  customerId: number;// define for the bag
  status: string; // created, pending, delivering, .... define for the bag

  // orderDetail: OrderDetailModel[]
}

// export class OrderDetailModel {
//   orderId: number;
//   flowerId: number;
//   quantity: number;
//   price: number;
//   totalAmount: number;
// }