import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interface-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface-example.component.html',
  styleUrl: './interface-example.component.css'
})
export class InterfaceExampleComponent {

  private employeeElement: Employee ={
    name:"John Doe",
    salary: 850000,
    role: "Junior Angular Developer"
  }

  private employees: Employee[] = [
    {
      name: "Jane Doe",
      salary: 550000,
      role: "UX designer"
    },
    {
      name: "Jonnie Doe",
      salary: 980000,
      role: "Dev ops"
    },
    {
      name: "Teszt Elek",
      salary: 680000,
      role: "PHP programmer"
    },
    {
      name: "Gipsz Jakab",
      salary: 560000,
      role: "PHP programmer"
    },
    {
      name: "Nap Pali",
      salary: 980000,
      role: "Angular programmer"
    },
  ];

  public get EmployeeElement():Employee{
    return this.employeeElement;
  }

  public get Employees():Employee[] {
    return this.employees;
  }

  public getAllEmployeeData():string{
    let result:string = "";
    for(let employee of this.employees){
      result += "Név: "+employee.name + ", beosztása: "+employee.role + ", fizetés: "+employee.salary+";";
    }
    return result;
  }

  public get EmployeeAvgSalary():number{
    let sum:number = 0.0;
    this.employees.forEach(employee => {
      sum+=employee.salary;
    });
    return sum/this.employees.length;
  }

  public getMaxEmployeeSalary():number{
    let max = this.employees[0].salary;
    this.employees.forEach(employee => {
      if (employee.salary>max)
        max=employee.salary;
    });
    return max;
  }
}

//adatszerkezet leírása (ezeket az adatokat kötelező megadni)
// interface - előírás, protokoll, amit be kell tartani
export interface Employee {
  name: string;
  salary: number;
  role: string;
}


