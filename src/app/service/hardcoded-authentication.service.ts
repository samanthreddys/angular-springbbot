import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {


  constructor() { }
authenticate(username, password){
  // console.log('Before Login: ', this.isUserLoggedIn());
  if ( username === 'admin' && password === 'admin'){
    sessionStorage.setItem('authenticatedUser', username);
    // console.log(' After Login: ', this.isUserLoggedIn());
    return true;
  }else{
    return false;
  }
}

isUserLoggedIn(){
  const user = sessionStorage.getItem('authenticatedUser');
  return !(user === null);
}

logout(){
  sessionStorage.removeItem('authenticatedUser');
}

}
