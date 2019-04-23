import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { Data1Component } from './data1/data1.component';
import { Data2Component } from './data2/data2.component';
import { FileSolomonComponent } from './file-solomon/file-solomon.component';
import { FilevenkyComponent } from './filevenky/filevenky.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    Data1Component,
    Data2Component,
    FileSolomonComponent,
    FilevenkyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
