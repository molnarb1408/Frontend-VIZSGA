import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeladatComponent } from './feladat/feladat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeladatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vizsga';
}
