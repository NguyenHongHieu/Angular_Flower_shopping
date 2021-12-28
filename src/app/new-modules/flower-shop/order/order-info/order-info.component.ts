import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { OrderModel } from 'src/app/new-modules/models/order.class';
import { UserModel } from 'src/app/new-modules/models/user.class';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css'],
})
export class OrderInfoComponent implements OnInit {
  public bags: number[] = [];
  public flowerBuys: FlowerModel[] = [];
  public counts: any = {};
  public user: UserModel = null;

  constructor(
    private _flowerService: FlowerService,
    private _toastService: CallToastService,
    private _userService: UserService,
    private _orderService: OrderService,
    private _routerService: Router
  ) { }

  ngOnInit(): void {
    this.getBag();
    var id = +JSON.parse(localStorage.getItem('user'));
    this.user = this._userService.findUserById(id);
  }
  async submitOrder() {
    var order = new OrderModel(0, this.user, this.flowerBuys);
    var orderId = this._orderService.addNew(order);
    localStorage.removeItem('bags');
    this._routerService
      .navigate([`orders/${orderId}`])
      .then(() => window.location.reload());
  }
  getBag(): void {
    this.flowerBuys = [];
    this.counts = {};
    this.bags = JSON.parse(localStorage.getItem('bags')) || [];
    this.bags.forEach((x) => {
      this.counts[x] = (this.counts[x] || 0) + 1;
    });

    Object.entries(this.counts).forEach(([key, value]) => {
      var flower = this._flowerService.getFlowerById(+key);
      flower.quantity = +value;
      this.flowerBuys.push(flower);
    });
  }
}
