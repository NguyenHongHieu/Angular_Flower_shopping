import { Component, OnInit } from '@angular/core';
import { Flower } from '../../models/flower.class';
import { User } from '../../models/user.class';
import { Order } from '../../models/order.class';
import { Router } from '@angular/router';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent implements OnInit {
  public bags: number[] = [];
  public flowerBuys: Flower[] = [];
  public counts: any = {};
  public user: User = null;

  constructor(
    private _flowerService: FlowerService,
    private _toastService: CallToastService,
    private _userService: UserService,
    private _orderService: OrderService,
    private _routerService: Router
  ) {}

  ngOnInit(): void {
    this.getBag();
    const id = +JSON.parse(localStorage.getItem('user'));
    this.user = this._userService.findUserById(id);
  }

  async submitOrder() {
    var order = new Order(0, this.user, this.flowerBuys);
    var orderId = this._orderService.addNew(order);
    localStorage.removeItem('bags');
    this._routerService
      .navigate([`order-detail/${orderId}`])
      .then(() => window.location.reload());
  }

  removeFlowerInBag(idFlower: number) {
    this.bags = this.bags.filter((x) => x != idFlower);
    localStorage.setItem('bags', JSON.stringify(this.bags));

    this._toastService.success(`Delete success !`, 2000);
    this.getBag();
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
  disabledOrder(): boolean {
    // var id = +JSON.parse(localStorage.getItem('user'));
    // var user = this._userService.findUserById(id);
    if (this.user && !this.user.isOwner && this.flowerBuys.length > 0) {
      return false;
    }
    return true;
  }
}
