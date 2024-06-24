import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private author:string = "BL";
  private sayHiMessage:string = "Üdvözlöm az Angular Material gyakorló oldalon :)";
  private message:string = "Kérem válasszon a fenti menüpontok közül!!!";

  public get Author():string { return this.author; }
  public get SayHiMessage():string { return this.sayHiMessage; }
  public get Message():string { return this.message; }

}
