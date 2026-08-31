// import { Component, OnInit } from '@angular/core';
// import { AllUpdateService } from '../../service/all-update.service';
// import { NgxSpinnerService } from 'ngx-spinner';

// export interface PeriodicElement {
//   id: number;
//   userName: string;
//   updatedAt: string;
//   recordsUpdated: number;
//   fileContentpath: string;
// }

// export interface UserName {
//   value: string;
//   viewValue: string;
// }

// @Component({
//   selector: 'app-get-all-update',
//   templateUrl: './get-all-update.component.html',
//   styleUrls: ['./get-all-update.component.css']
// })
// export class GetAllUpdateComponent implements OnInit {
//   displayedColumns: string[] = ['id', 'userName', 'updatedAt', 'recordsUpdated', 'fileContentpath'];
//   dataSource: PeriodicElement[] = [];
//   searchUserName: string = '';
//   searchDate: string = '';
//   addedDateFilter: string = '';

//   userNames: UserName[] = [
//     { value: 'caphatem', viewValue: 'caphatem' },
//     { value: 'capbasuoni', viewValue: 'capbasuoni' },
//     { value: 'islam', viewValue: 'islam' },
//     { value: 'kamel', viewValue: 'kamel' },
//     { value: 'lara', viewValue: 'lara' },
//   ];
//   urlVisibility: { [key: number]: boolean } = {};
//   isUserSelected = false;
//   constructor(private service: AllUpdateService, private spinner: NgxSpinnerService) {}

//   ngOnInit(): void {
//     this.GetAllUpdate('', '');
//   }

//   GetAllUpdate(searchQuery: string,addedDate: string) {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       console.error('Token not found. Please ensure the user is logged in.');
//       return;
//     }
//     this.service.getallUpdate(searchQuery, token,addedDate).subscribe(
//       (data: PeriodicElement[]) => {
//         this.dataSource = data;  
//       }, (error) => {
//         console.error('Error fetching updates:', error);
//       }
//     );
//   }

//   search(event: any): void {
//     this.searchUserName = (event.target as HTMLSelectElement).value.trim().toLowerCase();
//     this.GetAllUpdate(this.searchUserName, this.addedDateFilter);
//   }

//   applyAddedDateFilter(dateFilter: string) {
//     this.addedDateFilter = dateFilter;
//     this.GetAllUpdate(this.searchUserName, this.addedDateFilter);
//   }

//   onDateFilterChange(event: any) {
//     const date = (event.target as HTMLInputElement).value;
//     this.applyAddedDateFilter(date);
//   }

//   toggleUrlVisibility(id: number): void {
//     this.urlVisibility[id] = !this.urlVisibility[id];
//   }

//   viewFilePath(filePath: string): void {
//     console.log('Full file path:', filePath);
//   }
// }



import { Component, OnInit } from '@angular/core';
import { AllUpdateService } from '../../service/all-update.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  username: string;
  updatedat: string;
  recordscount: number;
  fileDownloadUrl: string;
  id?: number;  
}

export interface UserName {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-get-all-update',
  templateUrl: './get-all-update.component.html',
  styleUrls: ['./get-all-update.component.css']
})
export class GetAllUpdateComponent implements OnInit {
  displayedColumns: string[] = ['username', 'updatedat', 'recordscount',  'fileDownloadUrl'];
  dataSource: PeriodicElement[] = [];
  searchUserName: string = '';
  searchDate: string = '';
    addedDateFilter: string = '';

  userNames: UserName[] = [
    { value: 'caphatem', viewValue: 'caphatem' },
    { value: 'capbasuoni', viewValue: 'capbasuoni' },
    { value: 'islam', viewValue: 'islam' },
    { value: 'kamel', viewValue: 'kamel' },
    { value: 'lara', viewValue: 'lara' },
  ];
  urlVisibility: { [key: number]: boolean } = {};
  isUserSelected = false;
  noUserSelectedMessage = 'Username parameter is required to select.';
  noUpdatesMessage = '';

  constructor(private service: AllUpdateService, private spinner: NgxSpinnerService, private http: HttpClient) {}

  ngOnInit(): void {
    this.GetAllUpdate('', '');
  }
  GetAllUpdate(searchQuery: string,addedDate: string) {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found. Please ensure the user is logged in.');
      return;
    }
    this.service.getallUpdate(searchQuery, token,addedDate).subscribe(
      (data: PeriodicElement[]) => {
        this.dataSource = data;  
      }, (error) => {
        console.error('Error fetching updates:', error);
      }
    );
  }

  search(event: any): void {
    this.searchUserName = (event.target as HTMLSelectElement).value.trim().toLowerCase();
    this.GetAllUpdate(this.searchUserName, this.addedDateFilter);
  }

  applyAddedDateFilter(dateFilter: string) {
    this.addedDateFilter = dateFilter;
    this.GetAllUpdate(this.searchUserName, this.addedDateFilter);
  }

  onDateFilterChange(event: any) {
    const date = (event.target as HTMLInputElement).value;
    this.applyAddedDateFilter(date);
  }

  toggleUrlVisibility(id: number): void {
    this.urlVisibility[id] = !this.urlVisibility[id];
  }

  viewFilePath(filePath: string): void {
    console.log('Full file path:', filePath);
  }

  downloadFile(fileDownloadUrl: string): void {
    const apiUrl = 'https://updatedcertifcate-42df5.containers.snapdeploy.app' + fileDownloadUrl;
    this.http.get(apiUrl, { responseType: 'blob' }).subscribe(blob => {
      const filePath = decodeURIComponent(fileDownloadUrl.split('?filePath=')[1]);
      const fileName = filePath.split('\\').pop() ?? 'downloadedFile.xlsx';
      saveAs(blob, fileName);
    }, error => {
      console.error('Error downloading file:', error);
    });
  }
}

