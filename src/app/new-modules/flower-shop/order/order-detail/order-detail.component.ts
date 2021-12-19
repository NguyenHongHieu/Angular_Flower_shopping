import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../../../models/order.class';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { Flower } from 'src/app/new-modules/models/flower.class';
import { Flower } from '../../../models/flower.class';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  public order: Order = null;
  public subscription: Subscription;
  public flowers: Flower[];

  constructor(
    private _activateRouteService: ActivatedRoute,
    private _orderService: OrderService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._activateRouteService.params.subscribe((data) => {
      let id = data['id'];
      this.order = this._orderService.findOrderById(+id);
    });
    this.flowers = this.order.flowers;
  }
}
