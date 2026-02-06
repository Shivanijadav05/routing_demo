import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';

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
  saveStudent(user:IUser):Observable<IUser>
  {
    const url="http://localhost:5014/api/Student/Create";
    return this.http.post<IUser>(url,user);
  }
  deleteStudent(id:string):Observable<IUser>
  {
    const url="http://localhost:5014/api/Student";
    return this.http.delete<IUser>(url+"/"+id);
  }
  
}
