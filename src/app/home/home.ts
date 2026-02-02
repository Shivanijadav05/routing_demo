import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

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
