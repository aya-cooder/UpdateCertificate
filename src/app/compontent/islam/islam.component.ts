import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islam',
  templateUrl: './islam.component.html',
  styleUrl: './islam.component.css'
})
export class IslamComponent {

  selectedComponent: string = 'none'

  constructor(private router: Router) {}

  onComponentChange() {
    let route: string;

    switch (this.selectedComponent) {
      case 'component3':
        route = 'UpdateE1';
        break;
      case 'component4':
        route = 'UpdateE2';
        break;
      default:
        // Navigate to the "home" component when "Select" is chosen
        route = 'islam';
        break;
    }

    // Navigate to the determined route
    this.router.navigate([route]);
  }
}

