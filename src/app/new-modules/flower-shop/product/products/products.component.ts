import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Flower } from '../../../models/flower.class';
import { FlowerService } from '../../../../services/flower.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public flowers: Flower[] = [];
  public bags: number[] = [];

  @Output('idFlower')
  onHandleBags = new EventEmitter<number>();

  constructor(private _flowerService: FlowerService) {}

  ngOnInit(): void {
    this.flowers = this._flowerService.getAllFlower();
    console.log(this.flowers);
  }
  updateBag(id: number): void {
    this.onHandleBags.emit(id);
  }
}
