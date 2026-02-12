import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { interval, Observable, Subscription } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  intervalSubscription?:Subscription;
  constructor()
  {

  }
  ngOnInit()
  {
      // this.intervalSubscription=interval(1000).subscribe(count=>{
      //   console.log(count);
      // });

      const customObservale=new Observable<number>(observer=>{
        let count=0;
        setInterval(()=>{
          observer.next(count);
          if(count>3)
          {
            observer.error("count greater than 3");
          }
          if(count>2)
          {
            observer.complete();
          }
          count++;
        },1000);
      });

      this.intervalSubscription=customObservale.pipe(filter(data=>{
        if(data>0)
        {
          return true;
        }
        return false;
      }),map((data:number)=>{
        return 'count is '+data;
      })).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      });
    }

  ngOnDestroy() {
    this.intervalSubscription?.unsubscribe();
    this.intervalSubscription?.unsubscribe();
  }

  users=[
    {
      id:'1',
      name:'Shivani',
      age:20
    },
    {
      id:'2',
      name:'Shivani2',
      age:21
    },
    {
      id:'3',
      name:'Shivani3',
      age:23
    }
  ]
}
