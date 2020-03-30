import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  message = 'Inside Contact Us Page!';
  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
