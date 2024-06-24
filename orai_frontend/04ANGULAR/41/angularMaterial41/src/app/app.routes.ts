import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductOrderComponent } from './product-order/product-order.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'productAdd', component: ProductAddComponent},
    {path:'productFilter', component: ProductFilterComponent},
    {path:'productOrder', component: ProductOrderComponent},
    {path:'notfound', component:NotFoundComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', component: NotFoundComponent},
];
