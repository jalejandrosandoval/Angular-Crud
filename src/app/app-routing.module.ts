import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'details', 
    loadChildren: () => import('./Pages/Employees/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', 
    loadChildren: () => import('./Pages/Employees/edit/edit.module').then(m => m.EditModule) },
  { path: 'list', 
    loadChildren: () => import('./Pages/Employees/list/list.module').then(m => m.ListModule) },
  { path: 'new', 
    loadChildren: () => import('./Pages/Employees/new/new.module').then(m => m.NewModule) },
  { path: "**", redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
