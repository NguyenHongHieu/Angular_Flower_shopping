import { Injectable } from '@angular/core';
import { Flower } from '../new-modules/models/flower.class';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  private flowers: Flower[] = [
    new Flower(1, 'Rose', 15, 20, 'https://bit.ly/3Gtyio5'),
    new Flower(2, 'Fabric flowers', 10, 15, 'https://bit.ly/3Ir8jQ1'),
    new Flower(3, 'Sun Flower', 20, 15, 'https://bit.ly/31ANmkx'),
    new Flower(4, 'Blue Flower', 100, 15, 'https://bit.ly/3hyvKL5'),
    new Flower(5, 'Lotus flower', 150, 10, 'https://bit.ly/3dwuaav'),
    new Flower(6, 'Confetti flower', 120, 50, 'https://bit.ly/3Gp0XdT'),
    new Flower(7, 'Buttercup flower', 110, 20, 'https://bit.ly/3IvGpCs'),
    new Flower(8, 'Marigold flower', 180, 10, 'https://bit.ly/3y5EaAS'),
  ];

  constructor() {
     var flowerRepo = JSON.parse(localStorage.getItem("flowers")) as Flower[];
    // var flowerRepo = null;
     if(flowerRepo) this.flowers = flowerRepo;
     else localStorage.setItem("flowers", JSON.stringify(this.flowers));
  }
  getAllFlower() {
    return this.flowers;
  }

  getFlowerById(idFlower : number){
      return this.flowers.find(x => x.id === idFlower);
  }

  IsOutOfStock(id: number, numberBuy: number): boolean {
    var flower = this.flowers.find((x) => x.id === id);
    return flower.stock - numberBuy <= 0;
  }
  findFlowersById(id : number){
    return this.flowers.find(x => x.id === id);
  }
}
