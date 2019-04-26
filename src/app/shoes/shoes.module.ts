import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoesRoutingModule } from './shoes-routing.module';
import { ShoesComponent } from './shoes.component';
// import {ShoestypesComponent } from './shoestypes/shoestypes.component';


@NgModule({
  declarations: [
    ShoesComponent,
    // ShoestypesComponent
  ],
  imports: [
    CommonModule,
    ShoesRoutingModule
  ]
})
export class ShoesModule { }
