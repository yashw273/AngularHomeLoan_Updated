import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  preview:Previewdetails;
  public isValid:number=0;
  message?:any={};
  c1:any;
  constructor(private customerService:CustomerService , private router:Router) 
  {
    
this.preview=new Previewdetails();
   }
  ngOnInit(): void {
   // this.customerService.getAll().subscribe((data)=>{
   //   console.log(data);
   //   this.c1=data;
   //   this.preview=this.c1;
    //  console.log(this.preview);  })

   
    
  }


  saveData()
  {
   //console.log(this.preview.Address)
    this.customerService.addValue(this.preview).subscribe(
     (data)=>
     {
       console.log("Return Value From Rest"+data);
     }


)

  }
 

  NextDoc(){
    this.router.navigate(['document']);
  }

  
}
