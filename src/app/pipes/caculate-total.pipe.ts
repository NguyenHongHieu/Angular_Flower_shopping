import { Pipe, PipeTransform } from '@angular/core';
// import { Flower } from '../new-modules/models/flower.class';
import {Flower} from '../new-modules/models/flower.class'
import { FlowerService } from '../services/flower.service';
@Pipe({
  name: 'calculateTotal',
})
export class CaculateTotalPipe implements PipeTransform {
  constructor(private _flowerService: FlowerService) {}
  transform(flowers: Flower[]): number {
    var total = 0;
    // flowers.map((x) => (total += x.price * x.quantity));
    flowers.forEach((x) => (total += x.price * x.quantity));
    return total;
  }
}
