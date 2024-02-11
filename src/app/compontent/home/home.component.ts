import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  selectedComponent: string = 'none'

  constructor(private router: Router) {}

  onComponentChange() {
    let route: string;

    switch (this.selectedComponent) {
      case 'component1':
        route = 'UpdateKamel';
        break;
      case 'component2':
        route = 'UpdateLara';
        break;
      case 'component3':
        route = 'UpdateE1';
        break;
      case 'component4':
        route = 'UpdateE2';
        break;
      default:
        // Navigate to the "home" component when "Select" is chosen
        route = 'home';
        break;
    }

    // Navigate to the determined route
    this.router.navigate([route]);
  }
}
