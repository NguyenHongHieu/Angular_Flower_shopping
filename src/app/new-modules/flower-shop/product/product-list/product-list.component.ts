import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flower } from '../../../models/flower.class';
import { CallToastService } from '../../../../services/call-toast.service';
import { FlowerService } from '../../../../services/flower.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public flowers: Flower[] = [];
  public bags: number[] = [];
  constructor( 
    private _flowerService: FlowerService,
    private _toastService: CallToastService) { 
  }
  @Output('idFlower')
  onHandleBags = new EventEmitter<number>();
  ngOnInit(): void {
    this.bags = JSON.parse(localStorage.getItem('bags')) || [];
    this.flowers = this._flowerService.getAllFlower();
    console.log(this.flowers);
  }
  updateBag(id: number): void {
    // this.onHandleBags.emit(id);
    //
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