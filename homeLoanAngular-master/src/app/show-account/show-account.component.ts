import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Application } from '../application';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})


export class ShowAccountComponent implements OnInit {
  a1:Account=new Account();
  ax1=new Array<Account>();
  applicationid:any;
  accountid: number=0;


  constructor(private accountService:AccountService) {
    this.account=new Account();
   }
   account:any;
  ngOnInit(): void
   {
    this.account.applicationid=localStorage.getItem("aid");
    console.log(this.account.applicationid);  // to display  aid in the form

    this.account.loanamount=localStorage.getItem("loanamt");
    console.log(this.account.loanamount);  // to display loan amount in the form
   }

   loanamount:any;
  interestrate:number=8.5;
  startdate:Date=new Date("12-06-2021");
  enddate:Date=new Date("12-06-2023"); 
  ifsccode:String="YMRH0000456";
  accountbalance:number=7654321;
  
    findAccount()
    {
      
      this.accountService.findAccount(this.accountid).subscribe(
        (data)=>
        {
          console.log(data);
          this.a1=data
          this.ax1.push(this.a1);})
    }


    saveData(){
      this.account.applicationid=localStorage.getItem("aid");
      console.log(this.account.applicationid);  //To get application Id

      this.account.loanamount=localStorage.getItem("loanamt");
      console.log(this.account.loanamount);   //to get estimated amount

      this.accountService.addAccount(this.account).subscribe(
        (data)=>
        {
          console.log(data);
        
         })
          alert("Your Account is added");
    }
  }

