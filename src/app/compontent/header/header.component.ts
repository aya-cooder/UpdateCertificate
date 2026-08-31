import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router, private service:AuthService, private toaster:ToastrService){}
  ngOnInit(): void {
    
  }
  logout() {
    console.log('Logout button clicked');
    this.service.signOut(); 
    this.toaster.success('LogOut Success');


  }
}
