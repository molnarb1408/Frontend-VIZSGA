import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BmiComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductGrossPriceComponent } from './product-gross-price/product-gross-price.component';
import { TriangleComponent } from './triangle/triangle.component';
import { OddEvenComponent } from './odd-even/odd-even.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'rectangle', component: RectangleComponent},
    {path:'bmi', component: BmiComponent},
    {path:'productGrossPrice', component: ProductGrossPriceComponent},
    {path:'triangle', component: TriangleComponent},
    {path:'oddEven', component: OddEvenComponent},
    {path:'notfound', component: NotfoundComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', component: NotfoundComponent},
];
