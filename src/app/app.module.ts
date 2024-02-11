import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateKamelComponent } from './compontent/update-kamel/update-kamel.component';
import { HttpClientModule, HttpClient, HttpClientXsrfModule, HttpXhrBackend } from '@angular/common/http';
import { UpdateLaraComponent } from './compontent/update-lara/update-lara.component';
import { UpdateEslam1Component } from './compontent/update-eslam1/update-eslam1.component';
import { UpdateEslam2Component } from './compontent/update-eslam2/update-eslam2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './compontent/footer/footer.component';
import { HomeComponent } from './compontent/home/home.component';
import { LoginComponent } from './compontent/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarComponent } from './compontent/navbar/navbar.component';
import { IslamComponent } from './compontent/islam/islam.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';






@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    UpdateKamelComponent,
    UpdateLaraComponent,
    UpdateEslam1Component,
    UpdateEslam2Component,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    IslamComponent,
    
   


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    
 
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HttpClient,
      useClass: HttpClient,
      deps: [HttpXhrBackend, HttpClientModule],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
