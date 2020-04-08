import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(
    private http: HttpClient
  ) { }


isUserLoggedIn(){
  const user = sessionStorage.getItem('authenticatedUser');
  return !(user === null);
}

getAuthenticatedToken(){
  if (this.getAuthenticatedUser()) {
  return sessionStorage.getItem('token');
  }

}
getAuthenticatedUser(){
  return sessionStorage.getItem('authenticatedUser');
}

logout(){
  sessionStorage.removeItem('authenticatedUser');
  sessionStorage.removeItem('token');
}

// Basic Auth Service
  executeBasicAuthService(username, password){
    const basicAuthHeaderString = this.createBasicAuthHeader(username, password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get<BasicAuthBean>(`${API_URL}/basicauth`, {headers})
                .pipe(
                  map(data => {
                    sessionStorage.setItem('authenticatedUser', username);
                    sessionStorage.setItem('token', basicAuthHeaderString);
                    return data;
                  }));
  }

  // Encode the header message .
  createBasicAuthHeader(username, password){
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    console.log('basic Auth Header: ', basicAuthHeaderString);
    return basicAuthHeaderString;
  }

}

export class BasicAuthBean{

  constructor(
    public message: string
  ) { }



}
