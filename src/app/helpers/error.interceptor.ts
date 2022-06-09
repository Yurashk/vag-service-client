import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from "../services";

@Injectable()
export class ErrorNotificationInterceptor implements HttpInterceptor {
  constructor(
    private _snackBar: MatSnackBar,
    private auth: AuthService,
    private router: Router,
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
              console.error("Error Event");
            } else {
              switch (error.status) {
                case 400: // bad token
                  if (req.url.includes("/admin/otp/confirm")) {
                    break;
                  }
                  // this.toastr.show("Ошибка запроса", "Запрос", {
                  //   status: "danger",
                  // });
                  // setTimeout(() => {
                  //   // localStorage.removeItem("access_token");
                  //   // sessionStorage.removeItem("refreshToken");
                  //   this.storage.clear();
                  //   this.router.navigate(["auth/login"]);
                  // }, 1000 * 3);
                  break;
                case 401: // login
                  if (req.url.includes("/login")) {
                    break;
                  }
                  // const refreshToken = sessionStorage.getItem("refreshToken");
                  this._snackBar.open('Ви не авторизовані!', 'Ок', {
                    duration:2000
                  });
                  setTimeout(() => {
                    localStorage.clear();
                    // sessionStorage.clear();
                    this.router.navigate(["login"]);
                  }, 1000 * 3);

                  break;
                case
                403: // forbidden
                  this._snackBar.open('Ви не авторизовані!', 'Ок', {
                    duration:2000
                  });
                  setTimeout(() => {
                    localStorage.clear() ;
                    // sessionStorage.clear();
                    this.router.navigate(["login"]);
                  }, 1000 * 3);
                  break;
                default:
                 break
              }
            }
          } else {
            localStorage.clear()
          }
          return throwError(error);
        }
      )
    );
  }

}
