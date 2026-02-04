import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  
  name:string|null="";
  id:string|null="";
  constructor(private route:ActivatedRoute)
  {
    
  }

    ngOnInit()
    {
      this.route.params.subscribe((params)=>{
       this.name=params['name'];
       this.id=params['id'];
       
      })
    }

}
