import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-update-lara',
  templateUrl: './update-lara.component.html',
  styleUrl: './update-lara.component.css'
})
export class UpdateLaraComponent implements OnInit {
  FileUploadUrl = "http://10.100.102.52:5000/api/Request/updatedLara";
  file: any;
  flag = true;
  success: boolean = false;
  error: boolean = false;
  errorMessage: string = "";
  alertType: string = "";

  constructor() {}

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
    this.flag = false;

    fetch(this.FileUploadUrl, {
      method: 'PUT',
      body: formData,
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
          this.errorMessage = data;
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




