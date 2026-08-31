import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateKamelComponent } from './compontent/update-kamel/update-kamel.component';
import { UpdateLaraComponent } from './compontent/update-lara/update-lara.component';
import { UpdateEslam1Component } from './compontent/update-eslam1/update-eslam1.component';
import { UpdateEslam2Component } from './compontent/update-eslam2/update-eslam2.component';
import { HomeComponent } from './compontent/home/home.component';
import { LoginComponent } from './compontent/login/login.component';
import { IslamComponent } from './compontent/islam/islam.component';
import {  canActivateGuard } from './guards/auth.guard';
import { GetAllUpdateComponent } from './compontent/get-all-update/get-all-update.component';
import { HeaderComponent } from './compontent/header/header.component';
import { LaraComponent } from './compontent/lara/lara.component';
import { NotepadIslamComponent } from './compontent/notepad-islam/notepad-islam.component';
import { NotepadLaraComponent } from './compontent/notepad-lara/notepad-lara.component';
import { NewOrdersComponent } from './compontent/new-orders/new-orders.component';
import { REOrdersComponent } from './compontent/reorders/reorders.component';



const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate: [canActivateGuard]},
  {path:'UpdateKamel',component:UpdateKamelComponent, canActivate: [canActivateGuard] },
  {path:'UpdateLara',component:UpdateLaraComponent, canActivate: [canActivateGuard] },
  {path:'islam',component:IslamComponent, canActivate: [canActivateGuard] },
  {path:'Lara',component:LaraComponent , canActivate: [canActivateGuard] },
  {path:'UpdateE1',component:UpdateEslam1Component, canActivate: [canActivateGuard] },
  {path:'UpdateE2',component:UpdateEslam2Component, canActivate: [canActivateGuard] },
  {path:'AllUpdate',component:GetAllUpdateComponent, canActivate: [canActivateGuard]},
  {path:'Notepad_lara',component:NotepadLaraComponent, canActivate: [canActivateGuard]},
  {path:'Notepad_islam',component:NotepadIslamComponent, canActivate: [canActivateGuard]},
  {path:'New_orders',component:NewOrdersComponent, canActivate: [canActivateGuard]},
  {path:'RE_orders',component:REOrdersComponent, canActivate: [canActivateGuard]},

  { path: '', redirectTo: 'Login', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
