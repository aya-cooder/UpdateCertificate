import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotepadLaraService {
  private FileUploadUrl = 'https://updatedcertifcate-42df5.containers.snapdeploy.app/api/NotPaid/Print_NotPaid';


  constructor(private http: HttpClient) {}
  uploadFile(file: File, token: string) {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.FileUploadUrl, formData, { headers, responseType: 'text' });
  }
}
