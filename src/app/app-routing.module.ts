import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
//1
import {HeaderComponent} from './header/header.component';
//2
import {Data1Component} from './data1/data1.component';
//3
import {Data2Component} from './data2/data2.component';
//4
import {FileSolomonComponent} from './file-solomon/file-solomon.component';
//5
import {FilevenkyComponent} from './filevenky/filevenky.component';
//6
import {Newcom1Component} from './newcom1/newcom1.component';

const routes: Routes = [
{ path:'home', component:HomeComponent},
{ path:'about', component:AboutComponent},
{ path:'header', component:HeaderComponent},
{ path:'data1', component:Data1Component},
{ path:'data2', component:Data2Component},
{ path:'file-solomon', component:FileSolomonComponent},
{ path:'filevenky', component:FilevenkyComponent},
{ path:'newcom1',component:Newcom1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
