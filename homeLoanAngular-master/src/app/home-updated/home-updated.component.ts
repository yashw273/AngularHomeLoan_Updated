import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-updated',
  templateUrl: './home-updated.component.html',
  styleUrls: ['./home-updated.component.css']
})
export class HomeUpdatedComponent implements OnInit {
  myimage:string="assets/images/loan2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
