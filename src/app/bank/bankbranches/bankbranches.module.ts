import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankbranchesRoutingModule } from './bankbranches-routing.module';
import { BankbranchesComponent } from './bankbranches.component';

@NgModule({
  declarations: [
  BankbranchesComponent
  ],
  imports: [
    CommonModule,
    BankbranchesRoutingModule
  ]
})
export class BankbranchesModule { }
