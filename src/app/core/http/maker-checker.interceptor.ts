import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class MakerCheckerInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {

        if (request.method === 'GET') {
          return event;
        } else {
          if (event instanceof HttpResponse && event.body && event.body.commandId) {

            // Maker checker is enabled or performing actions of maker checker
            if (request.url && request.url.indexOf('makercheckers/') > 0) {
              // Return response for maker checker actions (approve or delete)
              console.log("Hi MakeCheckers");
              return event;
            } else {

              // Redirect if maker checker is enabled
              console.log("HI Maker is called")
              // console.log("Route: ",this.router.navigate(['maker-checker', event.body.commandId]));
              this.router.navigate(['maker-checker/', event.body.commandId]);
            }
          } else {
            // When no maker checker is enabled
            return event;
          }
        }
      })
    );
  }
}
