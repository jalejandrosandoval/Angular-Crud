import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Modules
import { NewRoutingModule } from './new-routing.module';

//Import Components
import { NewComponent } from './new.component';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
