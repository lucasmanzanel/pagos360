import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpResponse,HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../service/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.loaderService.hideLoader();
          }
        },
        (error) => {
          this.loaderService.hideLoader();
        }
      )
    );
  }
}