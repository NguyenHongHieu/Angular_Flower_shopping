import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { FlowerModel } from '../../../models/flower.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public flowers: FlowerModel[] = [];
  public bags: number[] = [];

  @Output()
  onHandleBags = new EventEmitter<FlowerModel>();

  constructor(private _flowerService: FlowerService) { }

  ngOnInit(): void {
    this.flowers = this._flowerService.getAllFlower();
    console.log(this.flowers);
  }
  updateBag(flower: FlowerModel): void {
    this.onHandleBags.emit(flower);
  }
}
