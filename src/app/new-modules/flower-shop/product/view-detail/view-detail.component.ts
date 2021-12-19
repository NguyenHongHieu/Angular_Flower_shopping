import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(
    private _activateRouteService: ActivatedRoute,
    private _flowerService: FlowerService
  )
  {}

  ngOnInit(): void {
    this.subscription = this._activateRouteService.params.subscribe((data) => {
      let id = data['id'];
      this.product = this._flowerService.findFlowersById(+id);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
