import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<HelloBean>('${API_URL}/hellobean');
  }
  executeHelloBeanPathVariableService(name){
    return this.http.get<HelloBean>(`${API_URL}/hellobean/${name}`// , {headers}
    );
  }
}
