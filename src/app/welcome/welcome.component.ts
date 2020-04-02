import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  message = 'Welcome ';
  welcomeMessageFromService: string;
  name: any;
  // Activated Route
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService
    ) { }

  ngOnInit() {

    this.name = this.route.snapshot.params.name;

  }

  getWelcomeMessage(){
   this.service.executeHelloBeanService().subscribe(
     response => this.handleSuccessResponse(response),
     error => this.handleErrorResponse(error)
   );

  }

    getWelcomeMessagePathVariable(){
   this.service.executeHelloBeanPathVariableService(this.name).subscribe(
     response => this.handleSuccessResponse(response),
     error => this.handleErrorResponse(error)
   );

  }

  handleSuccessResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = `${error.error.message}---${error.error.status}`;

  }

}
