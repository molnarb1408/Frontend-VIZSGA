import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularLogoComponent } from './angular-logo/angular-logo.component';
import { ComponentLifeCycleComponent } from './component-life-cycle/component-life-cycle.component';
import { DiAngularComponent } from './di-angular/di-angular.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'angularLogo', component: AngularLogoComponent},
    {path:'componentLifeCycle', component: ComponentLifeCycleComponent},
    {path:'diAngular', component: DiAngularComponent},
    {path:'notfound', component: NotFoundComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', component: NotFoundComponent},
];
