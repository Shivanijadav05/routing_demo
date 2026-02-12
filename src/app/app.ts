import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {IUser} from './interfaces/User.js'
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Product } from './service/product';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Header,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('routing_demo');
  intervalSubscription?:Subscription;
  constructor(private service:Product)
  {

  }

  studentData:any[]=[];

    ngOnInit()
    {
      // this.service.getStudentData().subscribe((data:any)=>{
        console.log("data");
        // this.studentData=data;

       
       
      }
  

    // ngDoCheck() {
    //   console.log("Change detection running");
    // }

    // ngAfterContentInit() {
    //   console.log('4️⃣ ngAfterContentInit');
    // }
  
    // ngAfterContentChecked() {
    //   console.log('5️⃣ ngAfterContentChecked');
    // }
  
    // ngAfterViewInit() {
    //   console.log('6️⃣ ngAfterViewInit');
      
    // }
  
    // ngAfterViewChecked() {
    //   console.log('7️⃣ ngAfterViewChecked');
    // }
  
    // ngOnDestroy() {
    //   console.log('8️⃣ ngOnDestroy');
    // }
  

  getStudentData() {
    this.service.getStudentData().subscribe({
      next: (data: any) => {
        this.studentData = data;   
        console.log(this.studentData);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  user:IUser[]=[]
  addUser(user:IUser)
  {
      this.service.saveStudent(user).subscribe((data:IUser)=>{
        console.log(data);
        
      })
  }

  deleteUser(id:string)
  {
    this.service.deleteStudent(id).subscribe((data:IUser)=>{
      console.log(id);
      if(data)
      {
        this.getStudentData();
      }
    })
   
  }




}
