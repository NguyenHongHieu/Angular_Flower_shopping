import { FlowerModel } from "./flower.class";
import { UserModel } from "./user.class";

export class OrderModel {
  public id: number;
  public name: string;
  public user: UserModel;
  public flowers: FlowerModel[];

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
