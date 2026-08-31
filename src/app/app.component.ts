import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'
import { ApiStatusService } from './service/api-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name to styleUrls
})
export class AppComponent {

apiWakingUp$ = this.apiStatus.wakingUp$;
    constructor( private apiStatus:ApiStatusService){}  
    selectedComponent: string = 'none'
  title = 'UpdateCerifcate';
}
