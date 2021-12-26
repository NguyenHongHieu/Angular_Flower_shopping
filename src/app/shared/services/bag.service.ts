import { Injectable } from '@angular/core';
import { BagModel } from 'src/app/new-modules/models/bag.model';
import { Order } from 'src/app/new-modules/models/order.class';

@Injectable({providedIn: 'root'})
export class BagService {
    BAG_STORAGE_KEY: string = "bags";

    constructor() { }


    getBagTotalCount():number{
        var bags = this.getBagData();
        return bags.length;
    }

    getBagData() : BagModel[]{
        let bagJsonString = localStorage.getItem(this.BAG_STORAGE_KEY);
        return JSON.parse(bagJsonString);
    }

    setBagData(data: BagModel[]) {
        let bagJsonString = JSON.stringify(data || []);
       localStorage.setItem(this.BAG_STORAGE_KEY, bagJsonString); 
    }
    
    add(data: BagModel) {
        const bagData =this.getBagData();
        bagData.push(data);
        this.setBagData(bagData);
    }

    update(data: BagModel){
        const bagData =this.getBagData();
        const currentData = bagData.find(b => b.flowerId === data.flowerId);
        currentData.price = data.price;        
        currentData.quantity = data.quantity;

        this.setBagData(bagData);
    }
    
    delete(flowerId: number){
        const bagData =this.getBagData();
        // remove flower with id = flowerId in bagData
        
        this.setBagData(bagData);
    }

}

