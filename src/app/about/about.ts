import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child2 } from './child2/child2';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet,RouterLink,Child2],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
      username:string="shivani";
      users:string[] | undefined; 

      handleUsers(users:string[])
      {
        console.log(users);
        this.users=users;
      }
}
