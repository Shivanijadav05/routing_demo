import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http:HttpClient)
  {
    console.log("service works")
  }
  studentData:any;
  getStudentData()
  {
    const url="http://localhost:5014/api/Student";
   return this.http.get(url);
  }
  
}
