import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FeladatComponent } from './feladat.component';

describe('FeladatComponent', () => {
  let component: FeladatComponent;
  let fixture: ComponentFixture<FeladatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeladatComponent],

      imports: [
        RouterTestingModule,
        FormsModule

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeladatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //KOMPONENS létrehozása teszt
  it('Létrehozva a [feladat] komponens', () => {
    expect(component).toBeTruthy();
  });



  //OLDAL címkéje
  it('Vizsgafeladat címke', () => {
    const fixture = TestBed.createComponent(FeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container h1')?.textContent).toContain('Vizsgafeladat');
  });



  //INPUT mező tesztjei
  it('Input mező címkéje', () => {
    const fixture = TestBed.createComponent(FeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container label')?.textContent).toContain('Vizsgálandó szám');
  });

  it('Input mező bootstrap kinézet', () => {
    const fixture = TestBed.createComponent(FeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container input')?.classList).toContain('form-control');
  });

  it('Input mező azonosító', () => {
    const fixture = TestBed.createComponent(FeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container input')?.id).toContain('ertekMezo');
  });



  //BUTTON tesztjei
  it('Gomb felirat', () => {
    const fixture = TestBed.createComponent(FeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container button')?.textContent).toContain('Eredmény mentése');
  });

  it('Gomb kinézete', () => {
    const fixture = TestBed.createComponent(FeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container button')?.classList).toContain('btn-primary');
  });

  it('Gomb mérete', () => {
    const fixture = TestBed.createComponent(FeladatComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container button')?.classList).toContain('form-control');
  });

});
