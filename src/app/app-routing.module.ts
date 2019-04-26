import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [


{ path:'shoes', loadChildren:"./shoes/shoes.module#ShoesModule"},
{ path:'bank', loadChildren:"./bank/bank.module#BankModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
