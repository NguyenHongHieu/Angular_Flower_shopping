import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './new-modules/flower-shop/header/header.component';
import { HomeComponent } from './new-modules/flower-shop/home/home.component';
import { BagComponent } from './new-modules/flower-shop/bag/bag.component';
import { NotFoundComponent } from './new-modules/flower-shop/not-found/not-found.component';
import { OrderListComponent } from './new-modules/flower-shop/order/order-list/order-list.component';
import { FlowerService } from './shared/services/flower.service';
import { ProductsComponent } from './new-modules/flower-shop/product/products/products.component';
import { CaculateTotalPipe } from './shared/pipes/caculate-total.pipe';
// import { CallToastService } from './shared/services/call-toast.service';
// import { OrderService } from './shared/services/order.service';
// import { UserService } from './shared/services/user.service';

import { OrderDetailComponent } from './new-modules/flower-shop/order/order-detail/order-detail.component';
import { AboutMeComponent } from './new-modules/flower-shop/about-me/about-me.component';
import { ContactComponent } from './new-modules/flower-shop/contact/contact.component';
import { ProductListComponent } from './new-modules/flower-shop/product/product-list/product-list.component';
import { ViewDetailComponent } from './new-modules/flower-shop/product/view-detail/view-detail.component';
import { SharedModule } from './shared/shared.module';
import { OwnerGuard } from './new-modules/admin/user/guards/owner.guards';
import { UserGuard } from './new-modules/admin/user/guards/user.guard';
import { OrderInfoComponent } from './new-modules/flower-shop/order/order-info/order-info.component';
// import { AdminModule } from './new-modules/admin/admin.module';
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
    canActivate: [OwnerGuard],
    loadChildren: () =>
      import('./new-modules/admin/admin.module').then((m) => m.AdminModule),
  },
  // {
  //   path: 'product-detail',
  //   component: ProductDetailComponent,
  // },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'view-detail/:id',
    component: ViewDetailComponent,
  },
  {
    path: 'orders',
    canActivate: [UserGuard],
    component: OrderListComponent,
  },
  {
    path: 'order-detail/:id',
    component: OrderDetailComponent,
  },
  {
    path: 'bag',
    // canActivate : [UserGuard],
    component: BagComponent,
  },
  // {
  //   path:'Order-Info',
  //   canActivate : [UserGuard],
  //   component: OrderInfoComponent,
  // },
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
    OrderDetailComponent,
    AboutMeComponent,
    ContactComponent,
    ProductListComponent,
    ViewDetailComponent,
    CaculateTotalPipe,
    OrderInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
