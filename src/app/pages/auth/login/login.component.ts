import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogging = false;
  myForm: FormGroup = new FormGroup({
    "userPassword": new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ]),
    "userPhone": new FormControl("", Validators.pattern("[0-9]{10}"))
  });

  constructor(private authService: AuthService, private router: Router,) {
  }

  ngOnInit(): void {
  }

  login() {
    this.isLogging = true;
    this.authService.onAuthorize(this.myForm.controls['userPhone'].value, this.myForm.controls['userPassword'].value).pipe(tap(() => this.isLogging = false)).subscribe((res: any) => {
      localStorage.setItem('access_token', res.access_token);
      this.router.navigate(['/'])
    })
    console.log(this.myForm.controls['userPhone'].value)
  }
}
