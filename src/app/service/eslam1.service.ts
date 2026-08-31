import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Eslam1Service {
  private FileUploadUrl = 'https://updatedcertifcate-42df5.containers.snapdeploy.app/api/Zezo/sha7n';

  constructor(private http: HttpClient) {}
  uploadFile(file: File, token: string) {
    const formData = new FormData();
    formData.append('file', file);

    // Create headers with Authorization
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Use responseType option to specify the expected response type
    return this.http.put(this.FileUploadUrl, formData, { headers, responseType: 'text' });
  }
}