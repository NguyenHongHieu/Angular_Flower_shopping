import { Component, OnInit } from '@angular/core';
import { FlowerModel } from '../../models/flower.class';
import { UserModel } from '../../models/user.class';
import { OrderModel } from '../../models/order.class';
import { Router } from '@angular/router';
import { FlowerService } from 'src/app/shared/services/flower.service';
import { CallToastService } from 'src/app/shared/services/call-toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { BagService } from 'src/app/shared/services/bag.service';
import { BagModel } from '../../models/bag.model';

@Component({
	selector: 'app-bag',
	templateUrl: './bag.component.html',
	styleUrls: ['./bag.component.css'],
})
export class BagComponent implements OnInit {
	public bags: number[] = [];
	public flowerBuys: FlowerModel[] = [];
	public counts: any = {};
	public user: UserModel = null;
	public bagData: BagModel;

	constructor(
		private _flowerService: FlowerService,
		private _toastService: CallToastService,
		private _userService: UserService,
		private _orderService: OrderService,
		private _bagService: BagService,
		private _routerService: Router
	) { }

	ngOnInit(): void {
		this.getBag();
		const id = +JSON.parse(localStorage.getItem('user'));
		this.user = this._userService.findUserById(id);
	}

	async submitOrder() {
		var order = new OrderModel(0, this.user, this.flowerBuys);
		var orderId = this._orderService.addNew(order);
		localStorage.removeItem('bags');
		this._routerService
			.navigate([`orders/${orderId}`])
			.then(() => window.location.reload());
	}

	removeFlowerInBag(idFlower: number) {
		this._bagService.deleteFlowerFromBag(idFlower);
		this.getBag();
	}
	getBag(): void {
		this.bagData = this._bagService.getBag();
		this.flowerBuys = this.bagData.flowers || [];
	}

	disabledOrder(): boolean {
		if (this.user && !this.user.isOwner && this.flowerBuys.length > 0) {
			return false;
		}
		return true;
	}
}
