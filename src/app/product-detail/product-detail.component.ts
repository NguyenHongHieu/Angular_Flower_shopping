import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Flower } from '../models/flower.class';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public flowers: Flower[] = [];
  public bags: number[] = [];

  constructor(private _flowerService: FlowerService) {}
  @Output('idFlower')
  onHandleBags = new EventEmitter<number>();

  ngOnInit(): void {
    this.bags = JSON.parse(localStorage.getItem('bags')) || [];
    this.flowers = this._flowerService.getAllFlower();
    console.log(this.flowers);
  }
  updateBag(id: number): void {
    this.onHandleBags.emit(id);
  }
}
