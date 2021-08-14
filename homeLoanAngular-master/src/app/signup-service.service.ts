import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { Previewdetails } from './previewdetails';
import { Signup } from './signup';
@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  constructor(private httpclient:HttpClient) {}
  baseurl:string="http://localhost:9898/homeloanrest/api"

  //Adding CustomerID
  addcustomerdetails(signup:Signup)
  {
return this.httpclient.post(this.baseurl+"/customer",signup)
  }
}
