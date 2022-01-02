import { BagModel } from 'src/app/new-modules/models/bag.model';
import { BagService } from 'src/app/shared/services/bag.service';
import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { FlowerService } from 'src/app/shared/services/flower.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public flowers: FlowerModel[] = [];
  public bags: BagModel = new BagModel({});
  public name: string;
  quantityInBag: number = 0;
  constructor(
    private _flowerService: FlowerService,
    private _bagService: BagService,
    private _toastService: CallToastService
  ) {}
  @Output('idFlower')
  onHandleBags = new EventEmitter<number>();
  ngOnInit(): void {
    // this.bags = JSON.parse(localStorage.getItem('bags')) || [];
    // this.flowers = this._flowerService.getAllFlower();
    // console.log(this.flowers);

    this.flowers = this._flowerService.getAllFlower();
    console.log(this.flowers);
    this.getBag();
  }
  updateBag(flower: FlowerModel): void {
    // if (isOutOfStock) {
    //   this._toastService.error('Exceeded', 2000);
    //   return;
    // }

    this._bagService.addFlowerToBag(flower);
    this._toastService.success('Added', 1000);
    this.getBag();
  }
  getBag() {
    this.quantityInBag = 0;
    this.bags = this._bagService.getBag();
    this.bags.flowers?.map((x) => (this.quantityInBag += x.quantity));
    console.log(this.quantityInBag);
  }

  search() {
    if (this.name != '') {
      this.flowers = this.flowers.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    } else if (this.name == '') {
      this.ngOnInit();
    }
  }
}
