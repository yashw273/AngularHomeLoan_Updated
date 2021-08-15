import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9898/homeloanrest/api";

  //RETRIEVING ALL PRODUCTS
  getApplication()
  {
    return this.httpClient.get(this.baseUrl+"/application");
  }

  addApplication(application:Application){
    return this.httpClient.post(this.baseUrl+"/application/",application);
  }

  // deleteApp(application:Application){
  //  return this.httpClient.delete(this.baseUrl+"/application/",application);
  // }
}
