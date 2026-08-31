import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Eslam2Service } from '../../service/eslam2.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-update-eslam2',
  templateUrl: './update-eslam2.component.html',
  styleUrls: ['./update-eslam2.component.css']
})
export class UpdateEslam2Component implements OnInit {

  file: any;
  flag = true;
  errorMessage: string = "";
  error: boolean = false;

  constructor(private service: Eslam2Service, 
    private toaster: ToastrService,
    private spinner:NgxSpinnerService) {}


  ngOnInit(): void {
  }

  selectfile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  upload() {
    this.spinner.show()
    if (!this.file) {
      this.toaster.error("No file selected!");
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found. Please ensure the user is logged in.');
      return;
    }
      
    this.service.uploadFile(this.file, token).subscribe(
      (data) => {
        console.log(data); 
        this.toaster.success(data, "Success",  { disableTimeOut: true, positionClass: 'toast-top-center' }); 
        this.spinner.hide()
      },
      (error: any) => {
        if (error && error.error) {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = "An error occurred during update.";
        }
        this.error = true;
        this.toaster.error(this.errorMessage, "Error", { disableTimeOut: true, positionClass: 'toast-top-center' });
        this.flag = true;
        this.spinner.hide();
      }
    );
  }
}

