import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-array-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-example.component.html',
  styleUrl: './array-example.component.css'
})
export class ArrayExampleComponent {
  private fruits:string[] = ["barack", "szilva", "cseresznye","körte"];
  private points:number[] = [98,58,62,71];

  // readonly properties
  public get Fruits():string[] {
    return this.fruits;
  }

  public get Points():number[] {
    return this.points;
  }

  public getRandomNumberBySizeOfFruits():number {
    return Math.floor(Math.random() * this.fruits.length);
  }

  public getRandomFruitElement():string{
    return this.fruits[this.getRandomNumberBySizeOfFruits()];
  }
}
