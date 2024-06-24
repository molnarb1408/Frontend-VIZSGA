import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rectangle.component.html',
  styleUrl: './rectangle.component.css'
})
export class RectangleComponent {
  private a:number = 1;
  private b:number = 1;

  public get A():number {
     return this.a;
  }

  public set A(value:number) {
    this.a = value;
  }

  public get B():number {
    return this.b;
  }

  public set B(value:number) {
   this.b = value;
  }

  public getPerimeter():number {
    return (this.a +this.b)*2;
  }

  public getArea():number {
    return this.a *this.b;
  }
}
