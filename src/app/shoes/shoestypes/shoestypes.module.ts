import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoestypesRoutingModule } from './shoestypes-routing.module';
import { ShoestypesComponent } from './shoestypes.component';
import { BrandedComponent } from './branded/branded.component';
import { NonbrandedComponent } from './nonbranded/nonbranded.component';

@NgModule({
  declarations: [
    ShoestypesComponent,
    BrandedComponent,
    NonbrandedComponent],
  imports: [
    CommonModule,
    ShoestypesRoutingModule
  ]
})
export class ShoestypesModule { }
