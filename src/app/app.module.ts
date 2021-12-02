import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Import Modules
import { AppRoutingModule } from './app-routing.module';

//Import Components
import { AppComponent } from './app.component';
import { EmployeesFormModule } from './Components/Employees/employees-form/employees-form.module';
import { FooterModule } from './Components/Shared/footer/footer.module';
import { NavBarModule } from './Components/Shared/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    FooterModule,
    EmployeesFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
