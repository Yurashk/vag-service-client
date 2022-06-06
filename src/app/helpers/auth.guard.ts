import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import {AuthService} from "../services";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate() {
    return this.authService.isAuthorize()
      ? true
      : this.router.navigate(["login"]);
  }
}
