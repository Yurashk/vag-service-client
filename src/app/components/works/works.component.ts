import {Component, OnInit} from '@angular/core';
import {CarsService} from "../services";
import jwt_decode from "jwt-decode";
import {CarsInterface} from "../models";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  carsDidLoaded = false;
  userCars: CarsInterface[] = [];

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    let userId: any = jwt_decode(<string>localStorage.getItem('access_token'));
    console.log(userId);
    this.carsService.getUserCars(userId.id).subscribe((res: CarsInterface[]) => {
      console.log(res)
      this.userCars = res;
      this.carsDidLoaded = true
    })
  }

}
