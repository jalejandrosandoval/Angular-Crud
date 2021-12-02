import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Modules
import { NewRoutingModule } from './new-routing.module';

//Import Components
import { NewComponent } from './new.component';
import { EmployeesFormModule } from 'src/app/Components/Employees/employees-form/employees-form.module';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    EmployeesFormModule,
    NewRoutingModule
  ]
})
export class NewModule { }
