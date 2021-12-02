import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
