import { FlowerModel } from 'src/app/new-modules/models/flower.class';
export class BagModel {

	flowers: FlowerModel[] = [];

	public constructor(init?: Partial<BagModel>) {
		Object.assign(this, init);
	}
}