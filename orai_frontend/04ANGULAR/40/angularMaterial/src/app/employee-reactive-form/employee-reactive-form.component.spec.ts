import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReactiveFormComponent } from './employee-reactive-form.component';

describe('EmployeeReactiveFormComponent', () => {
  let component: EmployeeReactiveFormComponent;
  let fixture: ComponentFixture<EmployeeReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
