import { Component, OnInit, Output } from '@angular/core';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { Flower } from '../../models/flower.class';

@Component({
    selector: 'app-category',
    templateUrl: 'category.component.html'
})

export class CategoryComponent implements OnInit {
    public flowers: Flower[] = [];
    public bags: number[] = [];
    public searchflower: string;
    constructor(
        private _flowerService: FlowerService,
        private _toastService: CallToastService) { 
    }

    ngOnInit() {
    this.flowers = this._flowerService.getAllFlower();
    console.log(this.flowers);
     }
      search() {
        if (this.searchflower != '') {
          this.flowers = this.flowers.filter((res) => {
            return res.name
              .toLocaleLowerCase()
              .match(this.searchflower.toLocaleLowerCase());
          });
        } else if (this.searchflower == '') {
          this.ngOnInit();
        }
      }
}