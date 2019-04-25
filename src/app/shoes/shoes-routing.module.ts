import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesComponent } from './shoes.component';
import { ShoestypesComponent } from './shoestypes/shoestypes.component';


const routes: Routes = [
  { path:'', component:ShoesComponent},
  { path:'shoestypes', component:ShoestypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesRoutingModule { }
