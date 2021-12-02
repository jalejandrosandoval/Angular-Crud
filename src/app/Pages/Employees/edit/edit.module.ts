import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Modules
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';

//Import Components

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
