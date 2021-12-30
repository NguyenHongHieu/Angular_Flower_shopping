import { FlowerModel } from 'src/app/new-modules/models/flower.class';
export class BagModel {
    id: number;
    name: string;
    quantity: number;
    price: number;
    total: number;// can calculate
    flowers: FlowerModel[];

    public constructor(init?: Partial<BagModel>) {
        Object.assign(this, init);
    }
}