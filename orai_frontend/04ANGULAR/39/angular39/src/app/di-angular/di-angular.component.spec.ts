import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiAngularComponent } from './di-angular.component';

describe('DiAngularComponent', () => {
  let component: DiAngularComponent;
  let fixture: ComponentFixture<DiAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
