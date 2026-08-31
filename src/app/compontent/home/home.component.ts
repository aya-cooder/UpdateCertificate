import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AllUpdateService } from '../../service/all-update.service';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';




export interface PeriodicElement {
  userName: string;
  updatedAt: Date;
  recordsUpdated: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  usernameControl = new FormControl('');
  DateControl=new FormControl('');

  displayedColumns: string[] = ['userName', 'updatedAt', 'recordsUpdated'];

  dataSource: PeriodicElement[] = [];
    currentPage: number = 1;
  totalItems: number = 0;
  totalPage: number = 0;
  totalCount: number = 0;
  addedDateFilter: string = '';
  selectedFilter: string = '';
 
  
  selectedComponent: string = 'none'

  constructor(private router: Router, private service:AllUpdateService) {}

  ngOnInit(): void {
  }

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
          case 'component5':
            route = 'Notepad_lara';
            break;
            case 'component6':
              route = 'Notepad_islam';
              break;
               case 'component7':
              route = 'New_orders';
              break;
                case 'component8':
              route = 'RE_orders';
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
