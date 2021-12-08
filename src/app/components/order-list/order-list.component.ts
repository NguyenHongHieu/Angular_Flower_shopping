import { Component, OnInit } from '@angular/core';
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
  }
}
