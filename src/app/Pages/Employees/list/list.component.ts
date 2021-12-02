import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Interfaces/Employee.interface';
import { EmployeesService } from 'src/app/Services/Employees/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Variables Declaration
  private _Employees: IEmployee[] =[];
  public Employees$ = this._serviceEmployees.employees$;

  constructor(private _serviceEmployees: EmployeesService) { }

  ngOnInit(): void {
    this.Employees$.subscribe(elem =>{
      console.log(elem);
    })
  }

}