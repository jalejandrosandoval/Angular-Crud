import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/Interfaces/Employee.interface';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from 'src/app/Services/Employees/employees.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {

  // Variables Initialization
  public EmployeesForm: FormGroup = new FormGroup({});

  @Input() NewEmployee: boolean | undefined;
  private _Employee = {} as IEmployee;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _employeeService: EmployeesService,
    private _toastr: ToastrService) {

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
      this.EmployeesForm.patchValue(this._Employee);
  }

  // Method for initialization of EmployeesForm
  public BuildForm() {
    this.EmployeesForm = this.formBuilder.group({
      FirstName: ['', {
        Validators: [Validators.required]
      }],
      LastName: ['', {
        Validators: [Validators.required]
      }],
      Email: ['', {
        Validators: [
          Validators.required,
          Validators.email,
          Validators.pattern(this.isEmail)
        ]
      }],
      StartDate: ['', {
        Validators: [Validators.required]
      }],
    });
  }

  // Methods for get the fields of Form
  private get gFirstName(): AbstractControl {
    return this.EmployeesForm.get('FirstName')!;
  };

  private get gLastName(): AbstractControl {
    return this.EmployeesForm.get('LastName')!;
  };

  private get gEmail(): AbstractControl {
    return this.EmployeesForm.get('Email')!;
  };

  private get gStartDate(): AbstractControl {
    return this.EmployeesForm.get('StartDate')!;
  };

  // Methods for validate the fields
  public get gFirstNameValid() {
    return this.gFirstName.invalid && (this.gFirstName.touched || this.gFirstName.dirty);
  }

  public get gLastNameValid() {
    return this.gLastName.invalid && (this.gLastName.touched || this.gLastName.dirty);
  }

  public get gEmailValid() {
    return this.gEmail.invalid && (this.gEmail.touched || this.gEmail.dirty);
  }

  public get gStartDateValid() {
    return this.gStartDate.invalid && (this.gStartDate.touched || this.gStartDate.dirty);
  }

  public get gEmployeesFormValid() {
    return this.gFirstNameValid || this.gLastNameValid || this.gEmailValid || this.gStartDateValid
  }

  // Save the data of Form
  public async onSave() {
    try{
      if(this._Employee.Id == null){
        this._Employee = this.EmployeesForm.value;
        await this._employeeService.add_editEmployees(this._Employee);
        this._toastr.success('Add a new employe!', 'Employee:');
      }else{
        this.EmployeesForm.value.Id = this._Employee.Id;
        await this._employeeService.add_editEmployees(this.EmployeesForm.value);
        this._toastr.success('The Employe was successfully edited!', 'Employee:');
      }
      this._router.navigate(['list']);
    }catch(_error){
      this._toastr.error(`An error has occurred: ${_error}`, "Error");
    }
  }

  // Reset of Data
  public onReset() {
    this.EmployeesForm.reset({});
    this._router.navigate(['list']);
  }

}