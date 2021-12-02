import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Modules
import { EditRoutingModule } from './edit-routing.module';
import { EmployeesFormModule } from 'src/app/Components/Employees/employees-form/employees-form.module';

//Import Components
import { EditComponent } from './edit.component';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EmployeesFormModule,
    EditRoutingModule
  ]
})
export class EditModule { }
