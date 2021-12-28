import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
// import { ViewDetailComponent } from './product/product-detail/productdetail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { BagComponent } from './bag/bag.component';
import { ProductDetailComponent } from './product/product-detail/productdetail.component'


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'products',
        component: ProductListComponent,
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent, // TODO: Rename component to ProductDetailComponent
    },
    {
        path: 'orders',
        // canActivate: [UserGuard],
        component: OrderListComponent,
    },
    {
        path: 'orders/:id', // TODO: orders/1
        component: OrderDetailComponent,
    },
    {
        path: 'bag',
        // canActivate : [UserGuard],
        component: BagComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class flowerShopModule { }
