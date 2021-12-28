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
import { ProductsComponent } from './new-modules/flower-shop/product/products/products.component';
import { CaculateTotalPipe } from './shared/pipes/caculate-total.pipe';
import { OrderDetailComponent } from './new-modules/flower-shop/order/order-detail/order-detail.component';
import { AboutMeComponent } from './new-modules/flower-shop/about-me/about-me.component';
import { ContactComponent } from './new-modules/flower-shop/contact/contact.component';
import { ProductListComponent } from './new-modules/flower-shop/product/product-list/product-list.component';
import { SharedModule } from './shared/shared.module';
import { OwnerGuard } from './new-modules/admin/user/guards/owner.guards';
import { UserGuard } from './new-modules/admin/user/guards/user.guard';
import { OrderInfoComponent } from './new-modules/flower-shop/order/order-info/order-info.component';
import { ProductDetailComponent } from './new-modules/flower-shop/product/product-detail/productdetail.component';
// import { ViewDetailComponent, ProductDetailComponent } from './new-modules/flower-shop/product/product-detail/productdetail.component';


const appRoutes: Routes = [
  {
    path: '',
    // redirectTo: '/home',
    // pathMatch: 'full',
    loadChildren: () => import('./new-modules/flower-shop/flowerShop.module').then((m) => m.flowerShopModule),
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path: 'admin',
    canActivate: [OwnerGuard],
    loadChildren: () =>
      import('./new-modules/admin/admin.module').then((m) => m.AdminModule),
  },

  // {
  //   path: 'products',
  //   component: ProductListComponent,
  // },
  // {
  //   path: 'products/:id',
  //   component: ViewDetailComponent, // TODO: Rename component to ProductDetailComponent
  // },
  // {
  //   path: 'orders',
  //   // canActivate: [UserGuard],
  //   component: OrderListComponent,
  // },
  // {
  //   path: 'orders/:id', // TODO: orders/1
  //   component: OrderDetailComponent,
  // },
  // {
  //   path: 'bag',
  //   // canActivate : [UserGuard],
  //   component: BagComponent,
  // },
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
    // ViewDetailComponent,
    ProductDetailComponent,
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
export class AppModule { }
