// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AllUpdateService {
//   private url = 'http://10.100.102.50:5031/api/Zezo/getlogdata';

//   constructor(private http: HttpClient) {}

//   getallUpdate(searchQuery: string, token: string, addedDate: string): Observable<any[]> {
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });

//     let params = `?username=${searchQuery}`;
//     if (addedDate) {
//       params += `&addedDate=${addedDate}`;
//     }

//     return this.http.get<any[]>(`${this.url}${params}`, { headers });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../compontent/get-all-update/get-all-update.component';

@Injectable({
  providedIn: 'root'
})
export class AllUpdateService {
  private baseUrl = 'https://updatedcertifcate-42df5.containers.snapdeploy.app/api/Zezo';

  constructor(private http: HttpClient) {}

  getallUpdate(searchQuery: string, token: string, addedDate: string): Observable<PeriodicElement[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    let params = `?username=${encodeURIComponent(searchQuery)}`;
    if (addedDate) {
      params += `&addedDate=${encodeURIComponent(addedDate)}`;
    }

    return this.http.get<PeriodicElement[]>(`${this.baseUrl}/getlogdata${params}`, { headers });
  }
}

