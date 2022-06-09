import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

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

  addNewUser() {
    this.isLogging = true;
    this.authService.onCreateNewUser(this.myForm.controls['userPhone'].value, this.myForm.controls['userPassword'].value).pipe(tap(() => this.isLogging = false)).subscribe((res: any) => {
      this.router.navigate(['/'])
    })
    console.log(this.myForm.controls['userPhone'].value)
  }

}
