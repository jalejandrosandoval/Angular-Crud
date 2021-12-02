import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { EditComponent } from './Pages/Employees/edit/edit.component';
import { ListComponent } from './Pages/Employees/list/list.component';
import { NewComponent } from './Pages/Employees/new/new.component';
import { EmployeesFormComponent } from './Components/Employees/employees-form/employees-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EditComponent,
    ListComponent,
    NewComponent,
    EmployeesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
