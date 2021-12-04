import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Import Modules
import { AppRoutingModule } from './app-routing.module';
import { EmployeesFormModule } from './Components/Employees/employees-form/employees-form.module';
import { FooterModule } from './Components/Shared/footer/footer.module';
import { NavBarModule } from './Components/Shared/nav-bar/nav-bar.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore'

//Import Components
import { AppComponent } from './app.component';

//Import Environment
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    FooterModule,
    EmployeesFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: "toast-top-right",
      preventDuplicates: true
    })
  ],
  providers:[
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
