import { Routes } from '@angular/router';
import { Login } from './login/login';

import { Contact } from './contact/contact';
import { About } from './about/about';
import { Home } from './home/home';
import { Users } from './users/users';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Child } from './child/child';
import { Child2 } from './about/child2/child2';
import { App } from './app';


export const routes: Routes = [
  {path:'', component:Home},
    {path:'login', component:Login},
    {path:'contact' ,component:Contact,
        children:[
            {path:'child' ,component:Child}
        ]

    },
    {path:'about' ,component:About,
      children:[
        {path:'child2' ,component:Child2}
    ]
    },
    {path:'home' , component:Home},
    
    {
        path: 'users/:id/:name',
        loadComponent: () => {
          console.log(' Users component requested (lazy loading started)');
          return import('./users/users').then(c => {
            console.log(' Users component loaded');
            return c.Users;
          });
        }
      },

    {path:'users/:id/:name' ,component:Users},
  
    {path:"**" ,component:Pagenotfound}
 
];
