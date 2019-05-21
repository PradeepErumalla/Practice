import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';



const routes: Routes = [
{ path:'shoes', loadChildren:"./shoes/shoes.module#ShoesModule"},
{ path:'team', loadChildren:"./team/team.module#TeamModule"},
{ path:'books', component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
