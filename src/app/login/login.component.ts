import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';

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
              private hardcodedAuthenticationService: HardcodedAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log('UserName:', this.username);
    // console.log('Password:', this.password);
    if ( this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // console.log('Inside Welcome');
      this.invalidLogin = false;
            // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;

    }
    // console.log(this.username);
    // console.log(this.password);
  }

}
