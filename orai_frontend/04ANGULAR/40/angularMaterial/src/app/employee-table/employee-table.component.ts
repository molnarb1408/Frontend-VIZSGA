import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {

  private employees: Employee[] = [
    {
      name:'Teszt Elek',
      salary: 500000,
      role: 'programozó',
      gender:'férfi',
      status: true,
    },
    {
      name:'Gipsz Jakab',
      salary: 680000,
      role: 'programozó',
      gender:'férfi',
      status: true,
    }, 
    {
      name:'Kukor Ica',
      salary: 280000,
      role: 'ügyintéző',
      gender:'nő',
      status: true,
    }, 
    {
      name:'Nap Pali',
      salary: 630000,
      role: 'grafikus',
      gender:'férfi',
      status: false,
    }, 
    {
      name:'John Doe',
      salary: 980000,
      role: 'programozó',
      gender:'férfi',
      status: true,
    }, 
    {
      name:'Jane Doe',
      salary: 320000,
      role: 'grafikus',
      gender:'nő',
      status: true,
    }, 
    {
      name:'Jonnie Doe',
      salary: 530000,
      role: 'programozó',
      gender:'férfi',
      status: false,
    },
  ];
  
  private programmers = this.employees.filter(employee => employee.role === 'programozó');
  
  public get Employees():Employee[]{
    return this.employees;
  }

  public get Programmers():Employee[]{
    return this.programmers;
  }
}

export interface Employee {
  name: string;
  salary: number;
  role: string;
  gender: string;
  status:boolean;
}
