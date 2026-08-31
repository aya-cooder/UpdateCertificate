import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lara',
  templateUrl: './lara.component.html',
  styleUrl: './lara.component.css'
})
export class LaraComponent {

  selectedComponent: string = 'none'
  constructor(private router:Router){}

  onComponentChange() {
    let route: string;

    switch (this.selectedComponent) {
      case 'component3':
        route = 'UpdateLara';
        break;
      case 'component4':
        route = 'Notepad_lara';
        break;
      default:
        route = 'Lara';
        break;
    }

  
    this.router.navigate([route]);
  }
}



