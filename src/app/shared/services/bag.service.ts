import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { Injectable } from '@angular/core';
import { BagModel } from 'src/app/new-modules/models/bag.model';
import { BaseService } from './base-service.service';
import { FlowerService } from './flower.service';

@Injectable({ providedIn: 'root' })
export class BagService {
	BAG_STORAGE_KEY: string = "bags";

	constructor(private _flowerService: FlowerService, private baseService: BaseService) { }

	getBag() {
		return new BagModel({
			flowers: this.baseService.get(this.BAG_STORAGE_KEY) as FlowerModel[]
		});
	}

	addFlowerToBag(flower: FlowerModel) {
		let flowersInBag = this.baseService.get(this.BAG_STORAGE_KEY) as FlowerModel[] || [];

		const indexFlowerExist = flowersInBag.findIndex(x => x.id == flower.id);

		if (flowersInBag && indexFlowerExist > -1) {
			flowersInBag[indexFlowerExist].quantity += 1;
			this.baseService.set(this.BAG_STORAGE_KEY, flowersInBag);
			return;
		}

		flower.quantity += 1;
		return this.baseService.post(this.BAG_STORAGE_KEY, flower);
	}

	deleteFlowerFromBag(idFlower: number) {
		return this.baseService.delete(this.BAG_STORAGE_KEY, idFlower);
	}

}

