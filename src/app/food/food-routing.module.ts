import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food.component';
import { FoodtypesComponent } from './foodtypes/foodtypes.component';

const routes: Routes = [

  { path:'',component:FoodComponent},
  { path:'foodtypes',component:FoodtypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
