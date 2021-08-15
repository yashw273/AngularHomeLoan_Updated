import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  preview:Previewdetails;

  constructor(private customerService:CustomerService , 
    private router:Router, private route:ActivatedRoute) 

  {this.preview=new Previewdetails();}

  ngOnInit(): void { }

  message?:any={};

  saveData()
  {
   this.customerService.addValue(this.preview).subscribe((data)=>
    {
      console.log(data);
      this.preview=data as Previewdetails;
      localStorage.setItem("cid",this.preview.customerid.toString());})
      alert("Your details has been saved");
  }


  NextDoc(){
    if(this.message!=null)
     {
      this.router.navigate(['document']);
     }
     else
     {
       alert("Please save the details before you continue");
     }
  }



}
