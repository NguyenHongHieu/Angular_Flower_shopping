import { Component, OnInit } from '@angular/core';
import { Flower } from 'src/app/new-modules/models/flower.class';
import { Order } from 'src/app/new-modules/models/order.class';
import { __values } from 'tslib';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor() {}
  // totalPrice: number;
  public orders: Order[];

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log(this.orders);
  }

  total(flowers: Flower[]) {
    let sum = 0;
    flowers.map((a) => sum += a.price * a.quantity);
    return sum;
    // return flowers.reduce((c,n)=>[...c,n.price],[]);
   // return flowers.reduce((accumulator, item) => sum += item.price)
    
  }
  
  // total2(){
  //   const orders = JSON.parse(localStorage.getItem('orders')) || [];
  //   if(!!orders.lenght) {
  //     orders.flowers.map( (element: Flower) => {
  //       element.total =  element.price * element.quantity;
  //     });
  //   }
  // }
}
