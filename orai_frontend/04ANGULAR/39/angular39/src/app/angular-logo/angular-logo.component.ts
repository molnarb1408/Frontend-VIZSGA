import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-logo',
  standalone: true,
  imports: [],
  templateUrl: './angular-logo.component.html',
  styleUrl: './angular-logo.component.css'
})
export class AngularLogoComponent {
  private angularLogoUrl: string = "https://cdn.cdnlogo.com/logos/a/24/angular-icon.svg";
  private angularLogoTitle:string = "Angular logo";
  private angularLogoAlt:string = "Angular logó felirat nélkül";
  private picsHeight:number =100;

  public get AngularLogoUrl():string { 
    return this.angularLogoUrl;
  }

  public set AngularLogoUrl(value:string){
    this.angularLogoUrl = value;
  }

  public get AngularLogoTitle():string{
    return this.angularLogoTitle;
  }

  public set AngularLogoTitle(value:string){
    this.angularLogoTitle = value;
  }

  public get AngularLogoAlt():string {
    return this.angularLogoAlt;
  }

  public set AngularLogoAlt(value:string){
    this.angularLogoAlt = value;
  }

  public get PicsHeight():number{
    return this.picsHeight;
  }

  public set PicsHeight(value:number){
    this.picsHeight = value;
  }

  public changePicture():void {
    this.AngularLogoUrl = "https://cdn.cdnlogo.com/logos/a/35/angular.svg";
    this.angularLogoTitle = "Angular logó felirattal";
    this.angularLogoAlt = "Angular logó felirattal";
  }
}
