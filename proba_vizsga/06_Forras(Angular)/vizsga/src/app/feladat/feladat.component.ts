import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feladat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feladat.component.html',
  styleUrl: './feladat.component.css'
})
export class FeladatComponent {
  szam!: number;
  logs: string[] = [];

  EredmenyMentes() {
    const result = `${this.szam} az ${this.VizsgaltSzamPrim(this.szam) ? '' : 'NEM '}prím szám.`;
    this.logs.push(result);

  }

  VizsgaltSzamPrim(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}