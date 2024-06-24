import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css'
})
export class BmiComponent {
  private title: string = "Testtömegindex számítás";
  private height: number = 1;
  private weight: number = 1;

  public get Title(): string {
    return this.title;
  }

  public get Height(): number {
    return this.height;
  }

  public set Height(value: number) {
    this.height = value;
  }

  public get Weight(): number {
    return this.weight;
  }

  public set Weight(value: number) {
    this.weight = value;
  }

  public bmiCalculate():number {
    return this.weight/Math.pow((this.height/100),2);
  }

  public getBmiCategoryText():string{
    let bmi:number = this.bmiCalculate();
    let bmiCategoryText:string ="";

    if (bmi<16){
      bmiCategoryText = "súlyos soványság";
    } else if (bmi>=16 && bmi<17){
      bmiCategoryText = "mérsékelt sovány";
    } else if (bmi>=17 && bmi<18.5){
      bmiCategoryText = "enyhe soványság";
    } else if (bmi>=18.5 && bmi<25){
      bmiCategoryText = "normál testsúly";
    } else if (bmi>=25 && bmi<30){
      bmiCategoryText = "túlsúlyos";
    } else if (bmi>=30 && bmi<35){
      bmiCategoryText = "I. fokú elhízás";
    } else if (bmi>=35 && bmi<40){
      bmiCategoryText = "II. fokú elhízás";
    } else if (bmi>=40){
      bmiCategoryText = "III. fokú elhízás";
    }
    return bmiCategoryText;
  }

  public showBmiAlert():void {
    let bmi:number = this.bmiCalculate();
    let bmiCategoryText:string = this.getBmiCategoryText();
    alert("Testtömegindex értéke: "+bmi+", kategória: "+bmiCategoryText);
  }
}
