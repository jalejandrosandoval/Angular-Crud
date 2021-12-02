import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components
import { NewComponent } from './new.component';

const routes: Routes = [
  {
    path: '', component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
