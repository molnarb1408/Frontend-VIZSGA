import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {

  //csak ezen az osztályon belül érhető el
  private author: string = 'BL';
  private angularUrl: string = 'http://angular.io/';
  private aSide:number = -1;

  //C# szintakszis - property
  public get Author(): string {
    return this.author;
  }

  public set Author(value: string) {
    this.author = value;
  }

  // readonly: csak olvasható (nincs setter), csak lekérdezni lehet
  // java-s szintakszis - property
  public getAngularUrl(): string {
    return this.angularUrl;
  }

  public get ASide():number {
    return this.aSide;
  }

  public set ASide(value: number) {
    this.aSide = value;
  }

  public sendMessage():void{
    alert("Event binding függvény hívás :)");
  }
  public changeAuthor():void {
    this.author = "Blahut Lóránt";
  }

  public getArea():number {
    return this.aSide*this.aSide;
  }
}
