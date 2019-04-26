import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankbranchesComponent } from './bankbranches.component';
import { SBIVMDComponent } from './sbi-vmd/sbi-vmd.component';

const routes: Routes = [
  { path :'', redirectTo: 'bankbranches', pathMatch: 'full'},
  { path:'bankbranches', component:BankbranchesComponent},
  { path:'sbi-vmd',component:SBIVMDComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankbranchesRoutingModule { }
