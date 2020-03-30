import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if ( this.username === 'test' && this.password === 'test') {
      this.invalidLogin = true;
    }else{
      this.invalidLogin = false;
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    }
    console.log(this.username);
    console.log(this.password);
  }

}
