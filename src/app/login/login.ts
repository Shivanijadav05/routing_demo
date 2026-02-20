import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../service/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    FormsModule   
  ],
  templateUrl: './login.html',
})
export class Login {

  loginData = {
    studentName: '',
    password: ''
  };

  errorMessage = '';
  constructor(private service:Product)
  {

  }

  login() {
    this.service.onLogin(this.loginData).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        console.log(localStorage.getItem('token'));
        console.log('Login successful');
      },
      error: () => {
        this.errorMessage = 'Invalid student name or password';
      }
    });
  }
}