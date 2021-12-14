import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './new-modules/flower-shop/header/header.component';
import { HomeComponent } from './new-modules/flower-shop/home/home.component';
import { BagComponent } from './new-modules/flower-shop/bag/bag.component';
import { NotFoundComponent } from './new-modules/flower-shop/not-found/not-found.component';
import { OrderListComponent } from './new-modules/flower-shop/order/order-list/order-list.component';
import { FlowerService } from './services/flower.service';
import { ProductsComponent } from './new-modules/flower-shop/product/products/products.component';
import { CaculateTotalPipe } from './pipes/caculate-total.pipe';
import { CallToastService } from './services/call-toast.service';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';
import { UserGuard } from './new-modules/admin/user/guards/user.guard';
import { OrderDetailComponent } from './new-modules/flower-shop/order/order-detail/order-detail.component';
import { AboutMeComponent } from './new-modules/flower-shop/about-me/about-me.component';
import { ContactComponent } from './new-modules/flower-shop/contact/contact.component';
import { ProductListComponent } from './new-modules/flower-shop/product/product-list/product-list.component';
import { ViewDetailComponent } from './new-modules/flower-shop/product/view-detail/view-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./new-modules/admin/admin.module').then(m => m.AdminModule)
  },
  // {
  //   path: 'product-detail',
  //   component: ProductDetailComponent,
  // },
  {
    path:'product-list',
    component: ProductListComponent,
  },
  {
    path:'view-detail',
    component: ViewDetailComponent,
  },
  {
    path: 'orders',
    component: OrderListComponent,
  },
  {
    path: 'order-detail/:id',
    component: OrderDetailComponent,
  },
  {
    path: 'bag',
    canActivate : [UserGuard],
    component: BagComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BagComponent,
    NotFoundComponent,
    OrderListComponent,
    ProductsComponent,
    CaculateTotalPipe,
    OrderDetailComponent,
    AboutMeComponent,
    ContactComponent,
    ProductListComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)],
  providers: [
    FlowerService,
    CallToastService,
    OrderService,
    UserService,
    UserGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
