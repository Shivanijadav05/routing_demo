import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http:HttpClient)
  {
    console.log("service works")
  }
  private baseUrl = environment.apiBaseUrl;

  getStudentData(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/Student`);
  }
 

  saveStudent(user:IUser):Observable<IUser>
  {
    
    return this.http.post<IUser>(`${this.baseUrl}/Student/Create`, user);
  }
  deleteStudent(id:string):Observable<IUser>
  {
    return this.http.delete<IUser>(`${this.baseUrl}/Student/${id}`);
  }
  onLogin(obj:any):Observable<any>
  {
    return this.http.post('http://localhost:5014/api/Login',obj);
  }
  
}
