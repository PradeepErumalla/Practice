import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTypesComponent } from './book-types/book-types.component';


const routes: Routes = [
  { path :'', redirectTo: 'book-types', pathMatch: 'full'},
  
  {path:'book-types', component:BookTypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
