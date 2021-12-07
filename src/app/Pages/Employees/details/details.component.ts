import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/Interfaces/Employee.interface';
import { EmployeesService } from 'src/app/Services/Employees/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // Variables Initialization
  public EmployeesDetailsForm: FormGroup = new FormGroup({});

  private _Employee = {} as IEmployee;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _employeeService: EmployeesService,) {

    let navigation = this._router.getCurrentNavigation();

    this._Employee = {
      ...navigation?.extras?.state
    } as IEmployee;

    this.BuildForm();
  }

  ngOnInit(): void {
    if (Object.entries(this._Employee).length === 0)
      this._router.navigate(['/new']);
    else
      this.EmployeesDetailsForm.patchValue(this._Employee);
  }

  // Method for initialization of EmployeesDetailsForm
  public BuildForm() {
    this.EmployeesDetailsForm = this.formBuilder.group({
      FirstName: [{value: '', disabled: true },{
        Validators: [Validators.required, ]
      }],
      LastName: [{value: '', disabled: true },{
        Validators: [Validators.required, ]
      }],
      Email: [{value: '',disabled: true}, {
        Validators:[
          Validators.required,, 
          Validators.email,
          Validators.pattern(this.isEmail)
        ]
      }],
      StartDate: [{value: new Date(), disabled: true },{
        Validators: [Validators.required, ]
      }],
    });
  }

  public onReturn(){
    this._router.navigate(['/list']);
  }
}
