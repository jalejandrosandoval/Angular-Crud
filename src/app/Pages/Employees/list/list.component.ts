import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IEmployee } from 'src/app/Interfaces/Employee.interface';
import { EmployeesService } from 'src/app/Services/Employees/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Variables Declaration
  public Employees$ = this._serviceEmployees.employees$;

  private navigatiosExtras: NavigationExtras = {
    state:{
      value: null
    }
  }

  constructor(
    private _serviceEmployees: EmployeesService,
    private _router: Router) { }

  ngOnInit(): void {
    this.Employees$.subscribe(elem =>{
      console.log(elem);
    })
  }

  // Method for Edit Employee
  public onEdit(_Employee: IEmployee){
    this.navigatiosExtras.state = _Employee;
    this._router.navigate(['edit'], this.navigatiosExtras);
  }

  // Method for Details Employee
  public onDetails(_Employee: IEmployee){
    this.navigatiosExtras.state = _Employee;
    this._router.navigate(['details'], this.navigatiosExtras)
  }

  // Method for Delete Employee
  public onDelete(_Id: any){
    
  }

}