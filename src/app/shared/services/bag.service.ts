import { Injectable } from '@angular/core';
import { BagModel } from 'src/app/new-modules/models/bag.model';
import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { FlowerService } from './flower.service';

@Injectable({ providedIn: 'root' })
export class BagService {
	BAG_STORAGE_KEY: string = "bags";

	constructor(private _flowerService: FlowerService) { }




	getBagJSON(): string {
		return localStorage.getItem(this.BAG_STORAGE_KEY);
	}

	parseIdsFlowerInBag(): number[] {
		return JSON.parse(this.getBagJSON()) as number[] || [];
	}

	getBagFlowersData(): BagModel {
		let idsFlowersBag = this.parseIdsFlowerInBag();
		const fowners = this._flowerService.getFlowersByIds(idsFlowersBag);

		return new BagModel({
			flowers: fowners,
		});
	}

	getIdsFlowerInBag(bag: BagModel): number[] {
		return bag.flowers.map(x => x.id);
	}

	setBagJSON(ids: number[]) {
		let bagJsonString = JSON.stringify(ids);
		localStorage.setItem(this.BAG_STORAGE_KEY, bagJsonString);
	}

	add(idFlowers: number): boolean {
		let idsFlower = this.parseIdsFlowerInBag();
		idsFlower.push(idFlowers);
		this.setBagJSON(idsFlower);
		return true;
	}

	update(data: BagModel) {
	}

	delete(flowerId: number) {
		let idsFlower = this.parseIdsFlowerInBag();

		const index = idsFlower.indexOf(flowerId);
		if (index > -1) {
			idsFlower.splice(index, 1);
		}
		this.setBagJSON(idsFlower);

		return true;
	}

	getFlowerBuys() {
		const bag = this.getBagFlowersData();



		const bagData = this.getBagData();

		const counts: any = {}
		const flowerBuys: FlowerModel[] = [];
		// const flowerBuys: BagModel[] = [];

		bagData.forEach((x) => {
			counts[`${x}`] = (counts[`${x}`] || 0) + 1;
		});
		Object.entries(counts).forEach(([key, value]) => {
			const flower = this._flowerService.getFlowerById(+key);
			flower.quantity = +value;
			flowerBuys.push(flower);
		});
		return flowerBuys;
	}
	// getFlowerIntoBag() {
	//     let bagData = this.getBagData();
	//     let counts: any = {}
	//     let flowerBag: FlowerModel[] = [];
	//     // const flowerBuys: BagModel[] = [];

	//     bagData.forEach((x) => {
	//         counts[`${x}`] = (counts[`${x}`] || 0) + 1;
	//     });
	//     Object.entries(counts).forEach(([key, value]) => {
	//         let ccc = this._flowerService.getFlowerById(+key);
	//         ccc.quantity = +value;

	//         const temp: FlowerModel = {
	//             id:ccc.id,
	//             name:ccc.name,


	//         };
	//         flowerBag.push(temp);
	//     });
	//     return flowerBag;
	// }

}

