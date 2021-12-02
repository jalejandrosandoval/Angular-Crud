import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Modules
import { ListRoutingModule } from './list-routing.module';

//Import Components
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
