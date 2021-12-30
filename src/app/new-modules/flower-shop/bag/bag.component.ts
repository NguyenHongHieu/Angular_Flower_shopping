import { Component, OnInit } from '@angular/core';
import { FlowerModel } from '../../models/flower.class';
import { UserModel } from '../../models/user.class';
import { OrderModel } from '../../models/order.class';
import { Router } from '@angular/router';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { BagService } from 'src/app/shared/services/bag.service';
import { BagModel } from '../../models/bag.model';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent implements OnInit {
  public bags: number[] = [];
  public flowerBuys: FlowerModel[] = [];
  public counts: any = {};
  public user: UserModel = null;
  public bagData: BagModel[];

  constructor(
    private _flowerService: FlowerService,
    private _toastService: CallToastService,
    private _userService: UserService,
    private _orderService: OrderService,
    private _bagService: BagService,
    private _routerService: Router
  ) { }

  ngOnInit(): void {
    this.getBag();
    const id = +JSON.parse(localStorage.getItem('user'));
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

  removeFlowerInBag(idFlower: number) {
    this._bagService.delete(idFlower);
    this.getBag();
    // this.bags = this.bags.filter((x) => x != idFlower);
    // localStorage.setItem('bags', JSON.stringify(this.bags));
    // this._toastService.success(`Delete success !`, 2000);

  }
  getBag(): void {
    this.bagData = this._bagService.getBagData();
    console.log(this.bagData);
    // this.flowerBuys = this._bagService.getFlowerBuys();
  }

  disabledOrder(): boolean {
    // var id = +JSON.parse(localStorage.getItem('user'));
    // var user = this._userService.findUserById(id);
    if (this.user && !this.user.isOwner && this.flowerBuys.length > 0) {
      return false;
    }
    return true;
  }

  //moved on service
  // getBag(): void {
  //   this.bagData = this._bagService.getBagData();
  //   //UI
  //   this.flowerBuys = [];
  //   this.counts = {};

  //   //old
  //   // this.bags = JSON.parse(localStorage.getItem('bags')) || [];
  //   // this.bags.forEach((x) => {
  //   //   this.counts[x] = (this.counts[x] || 0) + 1;
  //   // });

  //   this.bagData.forEach((x) => {
  //     this.counts[`${x}`] = (this.counts[`${x}`] || 0) + 1;
  //   });


  //   Object.entries(this.counts).forEach(([key, value]) => {
  //     var flower = this._flowerService.getFlowerById(+key);
  //     flower.quantity = +value;
  //     this.flowerBuys.push(flower);
  //   });
  // }
}
