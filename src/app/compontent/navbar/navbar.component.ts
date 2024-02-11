import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutService } from '../../service/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{
  constructor(private router:Router,private logoutsevice:LogoutService){}

  ngOnInit(): void {
    
  }

  logout(): void {
    this.logoutsevice.logout();
    this.router.navigate(['/Login']); // Navigate to the login page after logout
    console.log(this.logoutsevice)

  }

}
