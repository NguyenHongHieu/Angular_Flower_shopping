import { BagService } from 'src/app/shared/services/bag.service';
import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { Component, OnInit } from '@angular/core';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { BagModel } from '../../models/bag.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public bags: BagModel = new BagModel({ flowers: [] });
  quantityInBag: number = 0;

  constructor(
    private _flowerService: FlowerService,
    private _bagService: BagService,
    private _toastService: CallToastService
  ) { }

  ngOnInit(): void {
    this.getBag();
  }

  getBag() {
    this.quantityInBag = 0;
    this.bags = this._bagService.getBag();
    this.bags.flowers?.map(x => this.quantityInBag += x.quantity);
  }

  onGetBagIds(flower: FlowerModel) {

    // if (isOutOfStock) {
    //   this._toastService.error('Exceeded', 2000);
    //   return;
    // }

    this._bagService.addFlowerToBag(flower);
    this._toastService.success('Added', 1000);
    this.getBag();
  }
}
