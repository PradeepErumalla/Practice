import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path:'shoes', loadChildren:"./shoes/shoes.module#ShoesModule"},
{ path:'team', loadChildren:"./team/team.module#TeamModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
