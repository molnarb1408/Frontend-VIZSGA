import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vizsgafeladat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vizsgafeladat.component.html',
  styleUrl: './vizsgafeladat.component.css'
})
export class VizsgafeladatComponent {
  public eredmenyTTI!: number;
  public magassag!: number;
  public testtomeg!: number;
  public logs: string[] = [];


  EredmenyMentes() {
    this.testTomegIndexSzamito(this.magassag, this.testtomeg);
    const result = `Az ${this.testtomeg}kg testsúlyú és ${this.magassag}m magasságú ember testtömeg indexe: ${this.eredmenyTTI}`;
    this.logs.push(result);
  }

  testTomegIndexSzamito(magassag: number, testtomeg: number) {
    this.eredmenyTTI = (testtomeg / (magassag * magassag));
    return this.eredmenyTTI;
  }
}
