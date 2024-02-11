// update-kamel.component.ts

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-kamel',
  templateUrl: './update-kamel.component.html',
  styleUrls: ['./update-kamel.component.css']
})
export class UpdateKamelComponent implements OnInit {
  FileUploadUrl = "http://10.100.102.52:5000/api/Zezo/updatedKamel";
  file: any;
  flag = true;
  success: boolean = false;
  error: boolean = false;
  errorMessage: string = "";
  alertType: string = "";

  constructor(private toaster: ToastrService,
    ) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  selectfile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  upload() {
    if (!this.file) {
      console.error("No file selected!");
      return;
    }

    let formData = new FormData();
    formData.append('file', this.file);

    // Get the token from local storage
    const token = localStorage.getItem('token');

    // Check if token is available
    if (!token) {
      console.error('Token not found. Please ensure the user is logged in.');
      return;
    }

    // Create headers with Authorization
    const headers = new Headers({
      'Authorization': `Bearer ${token}`,
    });

    this.flag = false;

    fetch(this.FileUploadUrl, {
      method: 'PUT',
      body: formData,
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        this.flag = true;

        if (data.includes("Well done")) {
          // Success message
          this.toaster.success('Success', 'Login Success');
          this.showSuccessAlert();
        } else {
          // Display the server error message
          this.errorMessage = data;
          this.showErrorAlert();
        }
      })
      .catch((error) => {
        this.errorMessage = "Error during update please check  tawhed or print_status or survey_review or print_date";
        this.showErrorAlert();
        console.error("Error during upload:", error);
        console.error("Error details:", error.message);
        this.flag = true;
      });
  }

  private showSuccessAlert() {
    this.alertType = "success";
    this.showAlert();
  }

  private showErrorAlert() {
    this.alertType = "error";
    this.showAlert();
  }

  private showAlert() {
    alert(this.errorMessage);
    // Additional styling logic if needed
  }
}
