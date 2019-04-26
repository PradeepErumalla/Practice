import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesComponent } from '../shoes/shoes.component';
// import { ShoestypesComponent } from './shoestypes/shoestypes.component';



const routes: Routes = [
  { path :'', redirectTo: 'shoes', pathMatch: 'full'},
  { path:'shoes',component:ShoesComponent},
  { path:'shoestypes', loadChildren:"./shoestypes/shoestypes.module#ShoestypesModule"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesRoutingModule { }
