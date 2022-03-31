import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable()
export class AppAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // request.url
    const clonedReq = request.clone( {
      headers: request.headers.set( 'Authorization', 'Basic' + btoa( 'SABAN' ))
    } )

    return next.handle(clonedReq).pipe(
      // tap ( next => console.warn( next ))
    );
  }
}
