import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieTypeComponent } from './movie-type/movie-type.component';

import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MovieTypeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
