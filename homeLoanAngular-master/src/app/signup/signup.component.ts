import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from '../signup';
import { SignupServiceService } from '../signup-service.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:Signup
message?:any={};
  constructor(private router:Router,private signupservice:SignupServiceService) { 

    this.signup=new Signup();
  }
  
  ngOnInit(): void { }

  formSubmit(empForm:any)
  {
    this.router.navigate(['show-details'])
  }
saveData()
{
  this.signupservice.addcustomerdetails(this.signup).subscribe(
(data)=>
{
  console.log("VALUE RETURNED"+data);
}


  )
}  
callId()
  {
  if(this.message!=null)
  {
   this.router.navigate(['show-account',this.message.customerid]);
  }
  else
  {
    alert("Please save the details before you continue");
  }
  }
}
