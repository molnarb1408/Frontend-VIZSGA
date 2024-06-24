import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeReactiveFormComponent } from './employee-reactive-form/employee-reactive-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'employeeReactiveForm', component: EmployeeReactiveFormComponent},
    {path:'employeeTable', component: EmployeeTableComponent},
    {path:'notfound', component:NotFoundComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', component: NotFoundComponent},
];
