import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../../services/flower.service';
import { CallToastService } from '../../services/call-toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public bags : number[]=[];
  constructor(
    private _flowerService : FlowerService,
    private _toastService : CallToastService,
  ) { }

  ngOnInit(): void {
    this.bags = JSON.parse(localStorage.getItem("bags")) || [];
  }

  onGetBagIds(idFlower : number){
    var numberItem =  this.bags.filter(x=>x==idFlower).length;
    var isOutOfStock = this._flowerService.IsOutOfStock(idFlower,numberItem)

    if(isOutOfStock){
      this._toastService.error("Exceeded",2000);
      return;
    }

     this.bags.push(idFlower);
     localStorage.setItem("bags",JSON.stringify(this.bags));
     this._toastService.success("Added",1000);
  }
}
