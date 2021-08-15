import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplicationComponent } from './application/application.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DocumentComponent } from './document/document.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'customer',component:ShowDetailsComponent},
  {path:'document',component:DocumentComponent},
  {path:'application',component:ApplicationComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'admin', component:AdminComponent},
  {path:'account',component:ShowAccountComponent},
  {path:'faq',component:FaqComponent},
 {path:'aboutus',component:AboutusComponent},
  // {path:'signup', component:SignupComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'home', component:HomeComponent},
 
 


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
