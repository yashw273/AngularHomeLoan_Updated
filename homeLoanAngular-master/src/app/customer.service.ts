import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Previewdetails } from './previewdetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
customerid:any;
  constructor(private httpClient:HttpClient,private route:ActivatedRoute) { }
  baseUrl:string="http://localhost:9898/homeloanrest/api";

  getAll()
{
  return this.httpClient.get(this.baseUrl+"/customer");
}

addValue(preview:Previewdetails)
{
  return this.httpClient.post(this.baseUrl+"/customer",preview);
}

fetchCustomerid()
{
  this.customerid=this.route.snapshot.paramMap.get('customerid');
}


}

