import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BagComponent } from './components/bag/bag.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { FlowerService } from './services/flower.service';
import { ProductsComponent } from './components/products/products.component';
import { CaculateTotalPipe } from './pipes/caculate-total.pipe';
import { CallToastService } from './services/call-toast.service';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';
import { UserGuard } from './services/guards/user.guard';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
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
    path: 'product-detail',
    component: ProductDetailComponent,
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
    ProductDetailComponent,
    AboutMeComponent,
    ContactComponent
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
