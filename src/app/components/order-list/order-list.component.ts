import { Component, OnInit } from '@angular/core';
import { Flower } from 'src/app/models/flower.class';
import { Order } from 'src/app/models/order.class';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor() {}
  public orders: Order[];
  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log(this.orders);
  }

  // total(flowers: Flower[]){
  //   let sum = 0;
  //   console.log();
  //   return flowers.map((a) => sum += a.price);
  // }
}
