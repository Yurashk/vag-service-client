import {Component, OnInit} from '@angular/core';
import {CarsService} from "../services";
import {CarsInterface} from "../models";
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialog} from "./modal";

@Component({
  selector: 'app-all-cars-list',
  templateUrl: './all-cars-list.component.html',
  styleUrls: ['./all-cars-list.component.css']
})
export class AllCarsListComponent implements OnInit {

  carsDidLoaded = false;
  userCars: CarsInterface[] = [];

  constructor(private carsService: CarsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllCarsFunc()
  }

  getAllCarsFunc() {
    this.carsService.getAllCars().subscribe((res: CarsInterface[]) => {
      console.log(res)
      this.userCars = res;
      this.carsDidLoaded = true
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.carsDidLoaded = false;
      this.getAllCarsFunc();
      console.log(`Dialog result: ${result}`);
    });
  }
}
