import { Flower } from "./flower.class";
import { User } from "./user.class";

export class Order {
  public id: number;
  public name : string;
  public user : User;
  public flowers : Flower[];

  constructor(id? : number, user? : User, flowers? : Flower[]) {
    this.id = id;
    this.name = this.makeName(7);
    this.flowers = flowers;
    this.user = user;
  }

  makeName(length : number) : string{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
   }
   return result;
  }
}


// export class  OrderModel{
//   id: number;
//   date: Date;
//   totalAmount: number;
//   customerId: number;
//   status: number; // created, pending, delivering, ....

//   // orderDetail: OrderDetailModel[]
// }

// export class OrderDetailModel{
//   orderId: number;
//   flowerId: number;
//   quantity: number;
//   price: number;
//   totalAmount: number;
// }
