import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { __values } from 'tslib';

@Component({
  selector: 'app-employee-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    NgFor,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './employee-reactive-form.component.html',
  styleUrl: './employee-reactive-form.component.css'
})
export class EmployeeReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder){}

  form!: FormGroup;

  ngOnInit():void {
    this.form = this.fb.group({
      employeeName:['',[Validators.minLength(5), Validators.maxLength(50),Validators.required]],
      employeeRole:['',[Validators.required]],
      employeeSalary:['',[Validators.min(0), Validators.max(10000000),Validators.required]],
      employeeGender:'',
      employeeStatus:'',
    });
    this.form.valueChanges.subscribe(console.log);
  }

  employeeRoles:Role[] = [
    {value: '1', viewValue:'programozó'},
    {value: '2', viewValue:'grafikus'},
    {value: '3', viewValue:'ügyintéző'},
  ];
}

interface Role {
  value:string;
  viewValue:string;
}
