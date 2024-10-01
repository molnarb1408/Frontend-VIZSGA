import { Routes } from '@angular/router';
import { VizsgafeladatComponent } from './vizsgafeladat/vizsgafeladat.component';

export const routes: Routes = [
    {path: 'vizsgafeladat', component: VizsgafeladatComponent},
    {path: '', redirectTo: '/vizsgafeladat', pathMatch: 'full'},
];
