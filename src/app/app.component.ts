import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name to styleUrls
})
export class AppComponent {
  selectedComponent: string = 'none'
  title = 'UpdateCerifcate';
}
