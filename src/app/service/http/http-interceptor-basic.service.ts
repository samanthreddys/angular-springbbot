import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicService implements HttpInterceptor{

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    const basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    const basicAuthUserName = this.basicAuthService.getAuthenticatedUser();
    if ( basicAuthHeaderString && basicAuthUserName){
    request = request.clone({
      setHeaders: {
        Authorization : basicAuthHeaderString
      }
    });
  }
    return next.handle(request);
  }
}
