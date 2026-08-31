import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Login } from '../interface/Dtos';
import { AuthService } from '../../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private services: AuthService,
    private toaster: ToastrService,
    private router: Router,
    private spinner:NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.LoginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    });
  }

  login() {
  
    this.services.login(this.LoginForm.value).subscribe(
      (res: Login) => {
        if (res && res.token) {
          this.toaster.success('Success', 'Login Success');
          localStorage.setItem('token', res.token);

          if (res.roles && res.roles.length > 0) {
            this.handleRoles(res.roles);
          } else {
            console.error('No roles received from the backend.');
          }
        } else {
          console.error('Invalid response from the server.');
        }
      },
      (error) => {
        this.toaster.error(error.error);
      }
    );
  }

  handleRoles(roles: string[]) {
    // Implement your logic based on roles
    if (roles.includes('user')) {
      this.router.navigate(['UpdateKamel']);
    } else if (roles.includes('admin')) {
      this.router.navigate(['Lara']);
    } else if (roles.includes('teamleader')) {
      this.router.navigate(['islam']);
    } else if (roles.includes('manger') || roles.includes('bigmanger')) {
      this.router.navigate(['home']);
    }
  }

  get userName() {
    return this.LoginForm.controls['userName'];
  }

  get password() {
    return this.LoginForm.controls['password'];
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
 

}