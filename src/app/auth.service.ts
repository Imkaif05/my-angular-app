import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>('your-api/register', userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post<any>('your-api/login', userData);
  }
}
