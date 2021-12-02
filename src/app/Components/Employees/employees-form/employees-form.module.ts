import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Components
import { EmployeesFormComponent } from './employees-form.component';

@NgModule({
  declarations: [
    EmployeesFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeesFormComponent
  ]
})
export class EmployeesFormModule { }
