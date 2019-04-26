import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankbranchesRoutingModule } from './bankbranches-routing.module';
import { BankbranchesComponent } from './bankbranches.component';
import { SBIVMDComponent } from './sbi-vmd/sbi-vmd.component';

@NgModule({
  declarations: [
  BankbranchesComponent,SBIVMDComponent

  ],
  imports: [
    CommonModule,
    BankbranchesRoutingModule
  ]
})
export class BankbranchesModule { }
