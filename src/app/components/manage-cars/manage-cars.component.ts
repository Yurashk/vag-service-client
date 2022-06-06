import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {CarsService} from "../services";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CarsInterface} from "../models";
import {tap} from "rxjs";

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.css']
})
export class ManageCarsComponent implements OnInit {
  currentWorks: Array<string> = [];
  carDidLoaded = false;
  allWorks: Array<string> = [''];
  worksInProgress: Array<string> = [''];
  worksDone: Array<string> = [''];
  originalArrayOfWorks: Array<string> = [''];
  currentCar: CarsInterface = {
    _id: '',
    name: '',
    ownerPhone: '',
    gosNumber: '',
    vinCode: '',
    photoUrl: '', works: [''], worksDone: [''], worksInProgress: ['']
  };

  constructor(private carsService: CarsService, private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const prodId = params['id'];
      this.carsService.getCarById(prodId).pipe(tap(() => this.carDidLoaded = true)).subscribe(res => {
        this.currentCar = res;
        console.log(res.works);
        this.allWorks = res.works;
        this.originalArrayOfWorks = res.works;
        this.worksInProgress = res.worksInProgress;
        this.worksDone = res.worksDone;
      })
    })
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  toArray(value: string): void {
    this.currentWorks = value.split(/[\r\n]+/);
    console.log(this.currentWorks)
  }

  saveNewWorksChanges() {
    this.carDidLoaded = false;
    console.log(this.originalArrayOfWorks)
    this.carsService.changeCarWorksById(this.currentCar._id, this.currentWorks).pipe(tap(() => this.carDidLoaded = true)).subscribe(res => {
      this.currentCar = res;
      console.log(res.works);
      this.allWorks = res.works;
      this.originalArrayOfWorks = res.works;
      this.worksInProgress = res.worksInProgress;
      this.worksDone = res.worksDone;
    })
  }

  saveChanges() {
    this.carDidLoaded = false;
    console.log(this.originalArrayOfWorks)
    this.carsService.changeCarById(this.currentCar._id, this.originalArrayOfWorks, this.worksInProgress, this.worksDone).pipe(tap(() => this.carDidLoaded = true)).subscribe(res => {
      this.router.navigate(["all-cars"]);
    })
  }
}
