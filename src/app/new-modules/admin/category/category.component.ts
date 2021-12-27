import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { FlowerModel } from '../../models/flower.class';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
})
export class CategoryComponent implements OnInit {
  public flowers: FlowerModel[] = [];
  public bags: number[] = [];
  public name: string;
  constructor(private _flowerService: FlowerService) { }
  ngOnInit() {
    this.flowers = this._flowerService.getAllFlower();
    console.log(this.flowers);
  }
}
