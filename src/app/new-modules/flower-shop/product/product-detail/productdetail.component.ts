import { BagService } from 'src/app/shared/services/bag.service';
import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { FlowerService } from 'src/app/shared/services/flower.service';
@Component({
  selector: 'app-view-detail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public flowers: FlowerModel[] = [];
  public subscription: Subscription;
  public product: FlowerModel = null;
  public bags: number[] = [];

  constructor(
    private _activateRouteService: ActivatedRoute,
    private _flowerService: FlowerService,
    private _bagService: BagService,
    private _toastService: CallToastService
  ) {}

  ngOnInit(): void {
    this.subscription = this._activateRouteService.params.subscribe((data) => {
      let id = data['id'];
      // console.log('🚀 ~ id', id);
      this.product = this._flowerService.findFlowersById(+id);
      // console.log('🚀 ~ this.product', this.product);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  updateBag(flower: FlowerModel): void {
    //var isOutOfStock = this._flowerService.IsOutOfStock(id, numberItem);

    // if (isOutOfStock) {
    //   this._toastService.error('Exceeded', 2000);
    //   return;
    // }

    this._bagService.addFlowerToBag(flower);
    this._toastService.success('Added', 1000);
  }
}
