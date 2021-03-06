import { Injectable } from '@angular/core';
import { FlowerModel } from '../../new-modules/models/flower.class';

@Injectable({
	providedIn: 'root',
})
export class FlowerService {
	private flowers: FlowerModel[] = [
		new FlowerModel(1, 'Rose', 15, 20, 'https://bit.ly/3Gtyio5'),
		new FlowerModel(2, 'Fabric flowers', 10, 15, 'https://bit.ly/3Ir8jQ1'),
		new FlowerModel(3, 'Sun Flower', 20, 15, 'https://bit.ly/31ANmkx'),
		new FlowerModel(4, 'Blue Flower', 100, 15, 'https://bit.ly/3hyvKL5'),
		new FlowerModel(5, 'Lotus flower', 150, 10, 'https://bit.ly/3dwuaav'),
		new FlowerModel(6, 'Confetti flower', 120, 50, 'https://bit.ly/3Gp0XdT'),
		new FlowerModel(7, 'Buttercup flower', 110, 20, 'https://bit.ly/3IvGpCs'),
		new FlowerModel(8, 'Marigold flower', 180, 10, 'https://bit.ly/3y5EaAS'),
	];

	constructor() {
		var flowerRepo = this.getAllFlower();
		// var flowerRepo = null;
		if (flowerRepo) this.flowers = flowerRepo;
		else localStorage.setItem("flowers", JSON.stringify(this.flowers));
	}

	getAllFlower(): FlowerModel[] {
		return JSON.parse(localStorage.getItem("flowers")) as FlowerModel[];
	}

	getFlowerById(idFlower: number) {
		return this.flowers.find(x => x.id === idFlower);
	}

	IsOutOfStock(id: number): boolean {
		var flower = this.flowers.find((x) => x.id === id);
		return flower.stock <= 0;
	}

	findFlowersById(id: number): FlowerModel {
		return this.flowers.find(x => x.id === id);
	}

	getFlowersByIds(ids: number[]): FlowerModel[] {
		return this.flowers.filter(x => ids.includes(x.id));
	}
}
