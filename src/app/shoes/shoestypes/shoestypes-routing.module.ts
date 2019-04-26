import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoestypesComponent } from './shoestypes.component';
import { BrandedComponent } from './branded/branded.component';
import { NonbrandedComponent } from './nonbranded/nonbranded.component';

const routes: Routes = [
 { path :'', redirectTo: 'shoestypes', pathMatch: 'full'},
  { path:'shoestypes',component:ShoestypesComponent},
  { path:'branded',component:BrandedComponent},
  { path:'nonbranded',component:NonbrandedComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoestypesRoutingModule { }
