import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateKamelComponent } from './compontent/update-kamel/update-kamel.component';
import { UpdateLaraComponent } from './compontent/update-lara/update-lara.component';
import { UpdateEslam1Component } from './compontent/update-eslam1/update-eslam1.component';
import { UpdateEslam2Component } from './compontent/update-eslam2/update-eslam2.component';
import { HomeComponent } from './compontent/home/home.component';
import { LoginComponent } from './compontent/login/login.component';
import { IslamComponent } from './compontent/islam/islam.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'UpdateKamel',component:UpdateKamelComponent},
  {path:'UpdateLara',component:UpdateLaraComponent},
  {path:'islam',component:IslamComponent},
  {path:'UpdateE1',component:UpdateEslam1Component},
  {path:'UpdateE2',component:UpdateEslam2Component},
  { path: '', redirectTo: '/Login', pathMatch: 'full' }, // Redirect to component1 by default

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
