import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
  ],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css'
})
export class ProductOrderComponent implements AfterViewInit {

  private products:Product[] = [
    { id: 1, name: 'Dell PC - M42', price: 180000, category: 'PC' },
    { id: 2, name: 'ASUS PC - ZURI23', price: 350800, category: 'Notebook' },
    { id: 3, name: 'Dell PC - M22', price: 290700, category: 'PC' },
    { id: 4, name: 'Toshiba - A300', price: 150700, category: 'Notebook' },
    { id: 5, name: 'Toshiba - A200', price: 130000, category: 'Notebook' },
    { id: 6, name: 'TPLINK - 4030', price: 40500, category: 'Egyéb' },
  ];
  private displayedColumns:string[] = ['id', 'name', 'price', 'category'];
  dataSource = new MatTableDataSource(this.products);

  public get DisplayedColumns():string[] {return this.displayedColumns; }
  constructor(private _liveAnnouncer:LiveAnnouncer){}

  @ViewChild(MatSort) sort!:MatSort;

  ngAfterViewInit():void {
    this.dataSource.sort = this.sort
  }

  announceSortChange(sortState:Sort){
    if (sortState.direction){
      this._liveAnnouncer.announce(`Rendezés megtörtént: ${sortState.direction}`);
    }else {
      this._liveAnnouncer.announce("Rendezés törölve...");
    }
  }
}

export interface Product {
  id:number;
  name:string;
  price:number;
  category:string;
}