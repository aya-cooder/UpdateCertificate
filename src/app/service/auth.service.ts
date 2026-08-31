import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../compontent/interface/Dtos';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://updatedcertifcate-42df5.containers.snapdeploy.app/api/User';

  constructor(private http: HttpClient, private router:Router) {}

  login(model: Login): Observable<Login> {

    return this.http.post<Login>(`${this.apiUrl}/Login`, model);
  }


  signOut(){
    localStorage.clear();
    this.router.navigate(['/Login'])
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

}
