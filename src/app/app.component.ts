import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularProject';
  clickCondition=true;
  
  constructor(private router: Router) {
    console.log("app loading");
    
  }

  clickFunc(){
    this.clickCondition = !this.clickCondition; 
    console.log('HI I am working', this.clickCondition);
  }
  goTo(){
    this.router.navigate(['shoes']);
  }
}
