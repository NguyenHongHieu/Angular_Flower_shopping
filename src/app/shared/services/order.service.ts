import { Injectable } from '@angular/core';
import { FlowerModel } from '../../new-modules/models/flower.class';
import { OrderModel } from '../../new-modules/models/order.class';
import { UserModel } from '../../new-modules/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  isOwner: true
  private user = new UserModel({
    id: 3,
    name: "Hieu",
    username: "Hieu",
    password: "123",
    phone: "0345265550",
    isOwner: true
  });
  private flowers = [
    new FlowerModel(1, 'Rose', 15, 2, 'https://bit.ly/3tFtFSJ'),
    new FlowerModel(2, 'Confetti', 10, 1, 'https://bit.ly/3tKs65I')
  ];

  private orders: OrderModel[] = [
    new OrderModel(1, this.user, this.flowers),
  ];
  constructor() {
    var orderRepo = JSON.parse(localStorage.getItem("orders")) as OrderModel[];
    if (orderRepo) this.orders = orderRepo;
    else localStorage.setItem("orders", JSON.stringify(this.orders));
  }

  getId(arr: OrderModel[]) {
    return Math.max.apply(Math, arr.map(function (o) { return o.id; })) + 1;
  }

  addNew(order: OrderModel) {
    order.id = this.getId(this.orders);
    this.orders.push(order);
    this.updateDbLocal();
    return order.id;
  }

  findOrderById(id: number) {
    return this.orders.find(x => x.id === id);
  }
  updateDbLocal() {
    localStorage.setItem("orders", JSON.stringify(this.orders));
  }
}
