import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Modules
import { DetailsRoutingModule } from './details-routing.module';

//Import Components
import { DetailsComponent } from '../details/details.component';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
