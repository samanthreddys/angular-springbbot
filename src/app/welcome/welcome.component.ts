import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome ';
  name: any;
  // Activated Route
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    //console.log(this.route.snapshot.params['name']);

  }

}
