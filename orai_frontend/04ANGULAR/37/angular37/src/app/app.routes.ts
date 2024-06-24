import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArrayExampleComponent } from './array-example/array-example.component';
import { InterfaceExampleComponent } from './interface-example/interface-example.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'arrayExample', component: ArrayExampleComponent},
    {path:'interfaceExample', component: InterfaceExampleComponent},
    {path:'pipes', component: PipesComponent},
    {path:'notfound', component: NotFoundComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', component: NotFoundComponent},
];
