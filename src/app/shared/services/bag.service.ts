import { Injectable } from '@angular/core';
import { BagModel } from 'src/app/new-modules/models/bag.model';
import { FlowerModel } from 'src/app/new-modules/models/flower.class';
import { FlowerService } from './flower.service';

@Injectable({ providedIn: 'root' })
export class BagService {
    BAG_STORAGE_KEY: string = "bags";

    constructor(private _flowerService: FlowerService) { }


    getBagTotalCount(): number {
        var bags = this.getBagData();
        return bags.length;
    }

    getBagData(): BagModel[] {
        let bagJsonString = localStorage.getItem(this.BAG_STORAGE_KEY);
        return JSON.parse(bagJsonString);
    }

    setBagData(data: BagModel[]) {
        let bagJsonString = JSON.stringify(data || []);
        localStorage.setItem(this.BAG_STORAGE_KEY, bagJsonString);
    }

    add(data: BagModel) {
        const bagData = this.getBagData();
        bagData.push(data);
        this.setBagData(bagData);
    }

    update(data: BagModel) {
        const bagData = this.getBagData();
        const currentData = bagData.find(b => b.flowerId === data.flowerId);
        currentData.price = data.price;
        currentData.quantity = data.quantity;

        this.setBagData(bagData);
    }

    delete(flowerId: number) {
        const bagData = this.getBagData();
        // remove flower with id = flowerId in bagData
        const currentData = bagData.filter((x) => +x !== flowerId);

        this.setBagData(currentData);
    }

    getFlowerBuys() {
        const bagData = this.getBagData();
        const counts: any = {}
        const flowerBuys: FlowerModel[] = [];

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

}

