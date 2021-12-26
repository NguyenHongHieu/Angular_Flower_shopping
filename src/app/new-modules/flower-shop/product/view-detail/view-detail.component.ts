import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { Flower } from '../../../models/flower.class';
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css'],
})
export class ViewDetailComponent implements OnInit {
  public flowers: Flower[] = [];
  public subscription: Subscription;
  public product: Flower = null;
  public bags: number[] = [];

  constructor(
    private _activateRouteService: ActivatedRoute,
    private _flowerService: FlowerService,
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
  updateBag(id: number): void {
    var numberItem = this.bags.filter((x) => x == id).length;
    var isOutOfStock = this._flowerService.IsOutOfStock(id, numberItem);

    if (isOutOfStock) {
      this._toastService.error('Exceeded', 2000);
      return;
    }

    this.bags.push(id);
    localStorage.setItem('bags', JSON.stringify(this.bags));
    this._toastService.success('Added', 1000);
  }
}
