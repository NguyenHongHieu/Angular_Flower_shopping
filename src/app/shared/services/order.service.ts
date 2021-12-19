import { Injectable } from '@angular/core';
import { Flower } from '../../new-modules/models/flower.class';
import { Order } from '../../new-modules/models/order.class';
import { User } from '../../new-modules/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private user = new User(3,'Hieu',"Hieu","123",'0777903474',true);
  private flowers = [
    new Flower(1, 'Rose', 15, 2, 'https://bit.ly/3tFtFSJ'),
    new Flower(2, 'Confetti', 10, 1, 'https://bit.ly/3tKs65I')
  ];

  private orders : Order[] = [
    new Order(1,this.user,this.flowers),
  ];
  constructor() {
    var orderRepo = JSON.parse(localStorage.getItem("orders")) as Order[];
     if(orderRepo) this.orders = orderRepo;
     else localStorage.setItem("orders", JSON.stringify(this.orders));
  }

  getId(arr : Order[]){
    return Math.max.apply(Math, arr.map(function(o) { return o.id; })) + 1;
  }

  addNew(order : Order){
    order.id = this.getId(this.orders);
    this.orders.push(order);
    this.updateDbLocal();
    return order.id;
  }

  findOrderById(id : number){
    return this.orders.find(x => x.id === id);
  }
  updateDbLocal(){
    localStorage.setItem("orders", JSON.stringify(this.orders));
  }
}
