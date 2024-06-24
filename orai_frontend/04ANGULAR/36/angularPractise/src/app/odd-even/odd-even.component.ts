import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-odd-even',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './odd-even.component.html',
  styleUrl: './odd-even.component.css'
})
export class OddEvenComponent {
  private title:string = "Páros/páratlan ellenőrzés";
  private number:number =1;
  private resultClass:string = "";

  public get Title():string {
    return this.title;
  }

  public get ResultClass():string{
    return this.resultClass;
  }

  public set ResultClass(value:string){
    this.resultClass = value;
  }

  public get Number():number{
    return this.number;
  }

  public set Number(value:number){
    this.number = value;
  }

  public isOdd():boolean {
    let result: boolean = false;
    if (this.number % 2 ==0){
      result = true;
    }
    return result;
  }

  public getIsOddResultText():string{
    let isOddText = "";
    if (this.isOdd()){
      isOddText = "Páros";
    } else {
      isOddText = "Páratlan";
    }
    this.setResultClassByIsOdd();
    return isOddText;
  }

  public setResultClassByIsOdd():void{
    this.resultClass = "text-warning";
    if (this.isOdd()){
      this.resultClass = "text-success";
    }
  }
}
