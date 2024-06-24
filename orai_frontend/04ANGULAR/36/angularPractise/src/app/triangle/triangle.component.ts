import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './triangle.component.html',
  styleUrl: './triangle.component.css'
})
export class TriangleComponent {
  private title: string = "Háromszög szerkeszthetőség";
  private a:number = 1;
  private b:number = 1;
  private c:number = 1;
  private resultClass:string = "";

  public get Title():string {
    return this.title;
  }

  public get A():number{
    return this.a;
  }

  public set A(value:number){
    this.a = value;
  }

  public get B():number{
    return this.b;
  }

  public set B(value:number){
    this.b = value;
  }
  
  public get C():number{
    return this.c;
  }

  public set C(value:number){
    this.c = value;
  }

  public get ResultClass():string{
    return this.resultClass;
  }

  public set ResultClass(value:string){
    this.resultClass = value;
  }

  public isDrawable():boolean{
    let result = false;
    if ( (this.a+this.b>this.c) &&(this.b+this.c>this.a) && (this.a+this.c>this.b)){
      result = true;
    }
    return result;
  }

  public getIsDrawableText():string{
    let result = "Nem szerkeszthető a háromszög!!!";
    if (this.isDrawable()){
      result = "Szerkeszthető a háromszög!!!";
    }
    this.setResultClassByIsDrawable();
    return result;
  }

  public showAlertIsDrawable(){
    let resultText:string = this.getIsDrawableText();
    alert(resultText);
  }

  public setResultClassByIsDrawable():void{
    this.resultClass = "text-danger";
    if (this.isDrawable()){
      this.resultClass = "text-success";
    }
  }
}
