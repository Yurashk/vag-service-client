import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  onAuthorize(phone: string, password: string) {
    return this.http.post(
      `${environment.baseEndpoint}auth/login`,
      {
        phone,
        password,
      }
    );
  }
  onCreateNewUser(phone: string, password: string) {
    return this.http.post(
      `${environment.baseEndpoint}auth/registration`,
      {
        phone,
        password,
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]).then();
  }

  isAuthorize() {
    // return sessionStorage.getItem("access_token") !== null;
    const token=localStorage.getItem('access_token');
    return token !== null;
  }
}
