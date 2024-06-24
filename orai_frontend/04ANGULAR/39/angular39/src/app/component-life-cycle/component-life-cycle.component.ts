import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-life-cycle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-life-cycle.component.html',
  styleUrl: './component-life-cycle.component.css'
})
export class ComponentLifeCycleComponent {

  private counter: number = 0;
  private name: string ="Teszt Elek";
  private fruits: string[] = ["alma", "körte", "szilva", "barack"];

  constructor(){
    this.counter++;
    console.log("Konstruktor hívás: " + this.counter);
  }

  public get Counter(): number {
    return this.counter;
  }

  public set Counter(value: number){
    this.counter = value;
  }

  public get Name(): string {
    return this.name;
  }

  public set Name(value: string){
    this.name = value;
  }

  public get Fruits(): string[] {
    return this.fruits;
  }

  public set Fruits(value: string[]){
    this.fruits = value;
  }

  public reloadPage():void {
    window.location.reload();
  }

  public deleteFirstElementFromFruits():void{
    this.counter++;
    this.fruits.splice(0,1);
    console.log(this.fruits + ", számláló: "+this.counter);
  }

  // komponens / oldal betöltödésekor kerül meghívásra - FONTOS, hogy 1X 
  ngOnInit():void{
    this.counter++;
    console.log("ngOnInit() - betöltödik az oldal..., számláló: "+this.counter);
  }

  // ngOnInit() az oldal betötésekor felépíti a DOM-ot. Ha ezt követően van változás, egy komponensen vagy direktíván, akkor
  // kerül meghívásra
  // konfigurációt igényel a template-n (nem kerül meghívásra ez a metódus)
  ngOnChanges():void {
    this.counter++;
    console.log("ngOnChanges() - meghívása, számláló: "+this.counter);
  }

  // ngOnInit() után 1X lefut, majd minden változásnál, amit az Angular nem tud vagy nem akar kezelni
  ngDoCheck():void {
    this.counter++;
    console.log("ngDoCheck() - meghívása, számláló: "+this.counter);
  }

  // ngDoCheck() után 1X lefut
  // Miután Angular állományai betöltödtek, ez a metódus alkalmas a külső könyvtárak betöltésére
  ngAfterContentInit():void {
    this.counter++;
    console.log("ngAfterContentInit() - meghívása, számláló: "+this.counter);
  }

  // ngAfterContentInit() után kerül meghívásra és minden alkalommal, amikor az ngDoCheck()
  ngAfterContentChecked():void {
    this.counter++;
    console.log("ngAfterContentChecked() - meghívása, számláló: "+this.counter);
  }

  // ngAfterContentChecked() után kerül meghívásra 1X (init: beállításra való)
  // Miután az Angular beállította a komponenst a view vagy child view-n, vagy egy olyan view-n, ami tartalmazza a direktívát
  ngAfterViewInit():void {
    this.counter++;
    console.log("ngAfterViewInit() - meghívása, számláló: "+this.counter);
  }

  //ngAfterViewInit() után kerül meghívásra és minden alkalommal, amikor a ngAfterContentChecked() lefut
  ngAfterViewChecked():void {
    this.counter++;
    console.log("ngAfterViewChecked() - meghívása, számláló: "+this.counter);
  }

  // direktíva vagy komponens törlése előtt kerül meghívásra
  ngOnDestroy():void {
    this.counter++;
    console.log("ngOnDestroy() - meghívása, számláló: "+this.counter);
  }
}
