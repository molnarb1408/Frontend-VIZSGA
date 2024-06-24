import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  private exampleTxt:string = "Angular is the best";
  private realValue:number = 5.496;
  private percentValue:number = 0.85456;
  private moneyValue:number = 100.123;
  private dateValue:number = Date.now();

  // getters, setters nélkül - publikus adatok - bad practice
  // exampleTxt: string = "Angular is the best";

  public get ExampleTxt():string {
    return this.exampleTxt;
  }

  public get RealValue():number {
    return this.realValue;
  }

  public get PercentValue():number { 
      return this.percentValue;
  }

  public get MoneyValue():number { 
    return this.moneyValue;
  }

  public get DateValue():number { 
    return this.dateValue;
  }
}
