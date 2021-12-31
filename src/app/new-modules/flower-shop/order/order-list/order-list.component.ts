import { Component, OnInit } from '@angular/core';
import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { OrderModel } from 'src/app/new-modules/models/order.class';
import { __values } from 'tslib';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor() { }
  public orders: OrderModel[];

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log(this.orders);
  }

  total(flowers: FlowerModel[]) {
    let sum = 0;
    flowers.map((a) => (sum += a.price * a.quantity));
    return sum;
  }


}
