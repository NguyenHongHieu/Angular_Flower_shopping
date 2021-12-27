import { Injectable } from "@angular/core";
import { FlowerModel } from "src/app/new-modules/models/flower.class";
import { FlowerService } from "../services/flower.service"
Injectable({
    providedIn: "root",
})
export class FlowerAdminService {
    constructor(private flowerService: FlowerService) { }
}

