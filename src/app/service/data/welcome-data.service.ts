import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<HelloBean>(`http://localhost:8080/hellobean/${name}`);
  }
}
