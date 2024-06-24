import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-gross-price',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-gross-price.component.html',
  styleUrl: './product-gross-price.component.css'
})
export class ProductGrossPriceComponent {

  private title: string = "Termék bruttó ár számítás";
  private netPrice: number = 1;
  private vat: number =1;

  public get Title(): string {
    return this.title;
  }

  public get NetPrice(): number {
    return this.netPrice;
  }

  public set NetPrice(value: number) {
    this.netPrice = value;
  }

  public get Vat(): number {
    return this.vat;
  }

  public set Vat(value: number){
    this.vat = value;
  }

  public getGrossPrice(): number {
    return this.netPrice+(this.netPrice*(this.vat/100));
  }

  public showAlertGrossPrice(): void {
    alert("Bruttó ár: "+this.getGrossPrice() + " Ft")
  }
}
