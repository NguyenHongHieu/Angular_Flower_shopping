import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full',
    },
    {
        path: 'category',
        component: CategoryComponent
    }
];

@NgModule({
    declarations: [CategoryComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class AdminModule { }