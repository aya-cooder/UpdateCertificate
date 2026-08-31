import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotepadLaraService } from '../../service/notepad-lara.service';

@Component({
  selector: 'app-notepad-lara',
  templateUrl: './notepad-lara.component.html',
  styleUrl: './notepad-lara.component.css'
})
export class NotepadLaraComponent  implements OnInit{
  file: any;
  flag = true;
  errorMessage: string = "";
  error: boolean = false;

  constructor(private services:NotepadLaraService,
    private toaster: ToastrService,
 private spinner:NgxSpinnerService  ) {}

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


     this.services.uploadFile(this.file, token).subscribe(
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
        this.spinner.hide()
         this.flag = true;
       }
     );
  }
}

