import { FlowerModel } from "./flower.class";
import { UserModel } from "./user.class";

export class OrderModel {
  public id: number; //id order
  public name: string; // name order
  public user: UserModel; //information Customer
  //CustomerName:string
  public flowers: FlowerModel[];// information Flower
  //FlowerName: string
  public quantity: string; //define
  totalAmount: number; //define
  status: string // delivery,...

  constructor(id?: number, user?: UserModel, flowers?: FlowerModel[]) {
    this.id = id;
    this.name = this.makeName(7);
    this.flowers = flowers;
    this.user = user;
  }

  makeName(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
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
