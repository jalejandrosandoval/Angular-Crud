import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Import Components
import { EmployeesFormComponent } from './employees-form.component';

@NgModule({
  declarations: [
    EmployeesFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    EmployeesFormComponent
  ]
})
export class EmployeesFormModule { }
