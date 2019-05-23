import { Component, OnInit } from '@angular/core';
import friends from '../../assets/json/friends.json';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  friends:any=friends;
  indexValue:any;
  clickCondition=false;

  constructor() { 
    console.log("book componet loading");
    
  }

  ngOnInit() {
  }
  onClick(i){
    console.log('Click is working');
    this.indexValue=i;
    // this.clickCondition=true;
  }
}

class myclass
{
empName = '';
empId = '';
constructor(employeeId,employeeName)
{
this.empId = employeeId;
this.empName = employeeName;
}
Displayfun()
{
return 'Employee Name : '+this.empName+' Employee Id : '+this.empId;
}
}

let obj = new myclass('44688','Manojkumar M');
obj.Displayfun(); 
// see ouput in console.
console.log(obj.Displayfun())
