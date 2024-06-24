import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
  ],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  private products:Product[] = [
      { id: 1, name: 'Dell PC - M42', price: 180000, category: 'PC' },
      { id: 2, name: 'ASUS PC - ZURI23', price: 350800, category: 'Notebook' },
      { id: 3, name: 'Dell PC - M22', price: 290700, category: 'PC' },
      { id: 4, name: 'Toshiba - A300', price: 150700, category: 'Notebook' },
      { id: 5, name: 'Toshiba - A200', price: 130000, category: 'Notebook' },
      { id: 6, name: 'TPLINK - 4030', price: 40500, category: 'Egyéb' },
    ];
  
  private filteredProducts:Product[] = this.products;
  private displayedColumns:string[] = ['id', 'name', 'price', 'category'];
  private categories:string[] = [...new Set(this.products.map(product =>product.category))];
  private searchId:number | null = null;
  private searchName:string ='';
  private searchPrice:number | null = null;
  private searchCategory:string = '';

  public get Products():Product[] {return this.products}  
  public get FilteredProducts():Product[] {return this.filteredProducts}
  public get DisplayedColumns():string[] {return this.displayedColumns}
  public get Categories():string[] {return this.categories}
  public get SearchId():number |null { return this.searchId}
  public set SearchId(value:number) {this.searchId=value}
  public get SearchName():string { return this.searchName} 
  public set SearchName(value:string){ this.searchName = value} 
  public get SearchPrice():number |null { return this.searchPrice} 
  public set SearchPrice(value:number){ this.searchPrice=value}
  public get SearchCategory():string { return this.searchCategory} 
  public set SearchCategory(value:string){ this.searchCategory = value} 
  
  applyFilter():void {
    console.log('Szűrési folyamat....');
    this.filteredProducts = this.products.filter(product => {
      const idMatch = this.searchId ? product.id === this.searchId: true;
      const nameMatch = this.searchName ? product.name.toLocaleLowerCase().includes(this.searchName.toLocaleLowerCase()) :true;
      const priceMatch = this.searchPrice ? product.price===this.searchPrice :true;
      const categoryMatch = this.searchCategory ? product.category===this.searchCategory:true;
      return idMatch && nameMatch && priceMatch && categoryMatch;
    });
  }
}

export interface Product {
  id:number;
  name:string;
  price:number;
  category:string;
}