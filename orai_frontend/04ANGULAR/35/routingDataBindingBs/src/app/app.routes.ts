import { Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { ExampleComponent } from './example/example.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'sample', component: SampleComponent},
    {path:'example', component: ExampleComponent},
    {path:'notfound', component: NotFoundComponent},
    {path:'', redirectTo:'/sample',pathMatch:'full'},
    {path:'**', component: NotFoundComponent},
];
