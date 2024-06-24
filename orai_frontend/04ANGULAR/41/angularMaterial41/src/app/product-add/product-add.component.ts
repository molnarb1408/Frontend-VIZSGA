import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    NgFor,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {

  productForm!:FormGroup;
  vatOptions:number[] = [0,10,12,27];

  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void {
    this.productForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      manufacturer:['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      price:['', [Validators.required, Validators.min(0), Validators.max(3000000)]],
      vat:['', [Validators.required]],
      status: [true], //kezdőértéke ki lesz pipálva
    });
  }

  onSubmit():void{
    if (this.productForm.valid){
      console.log(this.productForm.value);
      alert("A megadott értékek: \nNév: "+this.productForm.value.name +", \nÁr: "+this.productForm.value.price +",\nGyártó:" +this.productForm.value.manufacturer +"\nÁFA: "+this.productForm.value.vat +"% \nÁllapot: "+this.productForm.value.status);
    } else {
      //Hibaüzenetek megjelenítése
      this.productForm.markAllAsTouched();
    }
  }
}
