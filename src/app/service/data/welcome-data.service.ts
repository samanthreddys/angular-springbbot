import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';

export class HelloBean{
  constructor(public message: string){

  }
}
@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloBeanService(){
    return this.http.get<HelloBean>('http://localhost:8080/hellobean');
  }
  executeHelloBeanPathVariableService(name){
    const basicAuthHeaderString = this.createBasicAuthHeader();
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get<HelloBean>(`http://localhost:8080/hellobean/${name}`, {headers});
  }

  createBasicAuthHeader(){
    const username = 'admin';
    const password = 'password';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    console.log('basic Auth Header: ', basicAuthHeaderString);
    return basicAuthHeaderString;
  }

}
