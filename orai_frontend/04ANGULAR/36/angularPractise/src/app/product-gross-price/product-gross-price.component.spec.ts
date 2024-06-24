import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGrossPriceComponent } from './product-gross-price.component';

describe('ProductGrossPriceComponent', () => {
  let component: ProductGrossPriceComponent;
  let fixture: ComponentFixture<ProductGrossPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGrossPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductGrossPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
