import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Dependency Injection

  constructor(private router: Router,
    private basicAuthService: BasicAuthenticationService,
    private hardCodedAuthenticationService: HardcodedAuthenticationService

  ) { }

  ngOnInit(): void {
  }

  // Handle Basic authentication
  handleBasicAuthLogin() {

    this.basicAuthService.executeBasicAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log('Invalid Login');
          this.invalidLogin = true;
        }
      );

  }
  // Handle JWT authentication
  handleJWTAuthLogin() {

    this.basicAuthService.executeJWTAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log('Invalid Login');
          this.invalidLogin = true;
        }
      );

  }

}
