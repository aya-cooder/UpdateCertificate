// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../compontent/interface/Dtos';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://10.100.102.52:5000/api/User';

  constructor(private http: HttpClient) {}

  login(model: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/Login`, model);
  }
}
