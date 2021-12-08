import { Component, OnInit } from '@angular/core';
import { CallToastService } from '../../services/call-toast.service';
import { Flower } from '../../models/flower.class';
import { FlowerService } from '../../services/flower.service';
import { User } from '../../models/user.class';
import { UserService } from 'src/app/services/user.service';
import { Order } from '../../models/order.class';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})


export class BagComponent implements OnInit {

  public bags : number[]=[];
  public flowerBuys : Flower[] = [];
  public counts : any = {};
  public user : User = null;

  constructor(
    private _flowerService : FlowerService,
    private _toastService : CallToastService,
    private _userService : UserService,
    private _orderService : OrderService,
    private _routerService : Router
  ) { }

  ngOnInit(): void {
    this.getBag();
    var id = +JSON.parse(localStorage.getItem("user"));
    this.user = this._userService.findUserById(id);
  }

   async submitOrder(){
    var order = new Order(0,this.user,this.flowerBuys);
    var orderId = this._orderService.addNew(order);
    localStorage.removeItem("bags");
    this._routerService.navigate([`order-detail/${orderId}`]).then(() => window.location.reload());
  }

  removeFlowerInBag(idFlower : number){

    this.bags = this.bags.filter(x => x != idFlower);
    localStorage.setItem("bags",JSON.stringify(this.bags));

    this._toastService.success(`Delete success !`, 2000);
    this.getBag();
  }

  getBag() : void{
      this.flowerBuys = [];
      this.counts = {};
      this.bags = JSON.parse(localStorage.getItem("bags")) || [];
      this.bags.forEach( (x) => { this.counts[x] = (this.counts[x] || 0) + 1; });

      Object.entries(this.counts).forEach(([key,value]) => {
          var flower = this._flowerService.getFlowerById(+key);
          flower.quantity = +value;
          this.flowerBuys.push(flower);
      })
  }
}
