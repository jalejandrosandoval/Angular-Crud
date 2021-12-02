import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {

  // Variables Initialization
  public EmployeesForm: FormGroup = new FormGroup({});
  @Input() NewEmployee: boolean | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit(): void {
    this.BuildForm();
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
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
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

  public get gEmployeesFormValid(){
    return this.gFirstNameValid || this.gLastNameValid || this.gEmailValid || this.gStartDateValid 
  }

  // Save the data of Form
  public onSave() {
    console.log(this.EmployeesForm);
  }
  
  // Reset of Data
  public onReset() {
    this.EmployeesForm.reset({});
    this._router.navigate(['list']);
  }
  
}