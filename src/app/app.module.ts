import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UpdateKamelComponent } from './compontent/update-kamel/update-kamel.component';
import { HttpClientModule, HttpClient, HttpClientXsrfModule, HttpXhrBackend } from '@angular/common/http';
import { UpdateLaraComponent } from './compontent/update-lara/update-lara.component';
import { UpdateEslam1Component } from './compontent/update-eslam1/update-eslam1.component';
import { UpdateEslam2Component } from './compontent/update-eslam2/update-eslam2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './compontent/home/home.component';
import { LoginComponent } from './compontent/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IslamComponent } from './compontent/islam/islam.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup' // to be added
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { PaginationDirective } from './directive/pagination.directive';
import { MatTableModule } from '@angular/material/table';
import { GetAllUpdateComponent } from './compontent/get-all-update/get-all-update.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderComponent } from './compontent/header/header.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LaraComponent } from './compontent/lara/lara.component';
import { NotepadIslamComponent } from './compontent/notepad-islam/notepad-islam.component';
import { NotepadLaraComponent } from './compontent/notepad-lara/notepad-lara.component';
import { NewOrdersComponent } from './compontent/new-orders/new-orders.component';
import { REOrdersComponent } from './compontent/reorders/reorders.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiRetryInterceptor } from './api-retry.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    UpdateKamelComponent,
    UpdateLaraComponent,
    UpdateEslam1Component,
    UpdateEslam2Component,
    HomeComponent,
    LoginComponent,
    TruncatePipe,
    IslamComponent,
    PaginationDirective,
    GetAllUpdateComponent,
    HeaderComponent,
    LaraComponent,
  
    NotepadIslamComponent,
       NotepadLaraComponent,
       NewOrdersComponent,
       REOrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    NgToastModule ,
    MatPseudoCheckboxModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
   MatCardModule,

   NgxSpinnerModule.forRoot({ type: 'ball-circus' }),
   ToastrModule.forRoot(),
    
 
  ],
  providers: [
     {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiRetryInterceptor,
    multi: true
  },
    provideClientHydration(),
        provideAnimationsAsync()

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
