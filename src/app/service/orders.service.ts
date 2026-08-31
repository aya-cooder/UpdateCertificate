import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private FileUploadUrl = 'https://updatedcertifcate-42df5.containers.snapdeploy.app//api/Mortg3';


  constructor(private http: HttpClient) {}
  
  NewOrdersUploadFile(file: File, token: string) {
    const formData = new FormData();
    formData.append('file', file);

    // Create headers with Authorization
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Use responseType option to specify the expected response type
    return this.http.put(`${this.FileUploadUrl}/NEW_ORDERS`, formData, { headers, responseType: 'text' });
  }

  ReOrdersUploadFile(file: File, token: string) {
    const formData = new FormData();
    formData.append('file', file);

    // Create headers with Authorization
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Use responseType option to specify the expected response type
    return this.http.put(`${this.FileUploadUrl}/RE_ORDERS`, formData, { headers, responseType: 'text' });
  }
}
