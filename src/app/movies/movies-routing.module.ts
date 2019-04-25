import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  // { path :'', redirectTo: 'movies', pathMatch: 'full'},
  { path:'', component:MoviesComponent},
  { path:'movie-type', component:MovieTypeComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
