import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IEmployee } from 'src/app/Interfaces/Employee.interface';
import { EmployeesService } from 'src/app/Services/Employees/employees.service';
import { ToastrService } from 'ngx-toastr';

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
      value: {}
    }
  }

  constructor(
    private _serviceEmployees: EmployeesService,
    private _router: Router,
    private _toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // Method for Edit Employees
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
  public async onDelete(_Id: any){
    try{
      await this._serviceEmployees.deleteEmployees(_Id);
      this._toastr.warning("Employee was successfully deleted!", "Employee:");
    }catch(_error){
      this._toastr.error(`An error has occurred: ${_error}`, "Error");
    }
  }

}