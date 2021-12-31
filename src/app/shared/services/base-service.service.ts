import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BaseService {

	constructor() { }

	// Get model from local
	get(key: string): any {
		const stringJSON = localStorage.getItem(key);
		return JSON.parse(stringJSON);
	}

	post(key: string, data: any): any {
		let arr = this.get(key);

		if (!arr) arr = [];
		arr.push(data);

		this.set(key, arr);
		return data;
	}

	put(key: string, data: any) {
	}

	set(key: string, data: any) {
		localStorage.setItem(key, JSON.stringify(data));
	}

	delete(key: string, id: number): boolean {
		let arr = this.get(key);
		if (!arr) arr = [];

		const indexRemove = arr.findIndex((x: { id: any; }) => x.id == id);
		if (indexRemove > -1) {
			arr.splice(indexRemove, 1);
		}

		this.set(key, arr);
		return true;
	}
}
