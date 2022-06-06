import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../../services";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'add-new-car.component.html',
})
export class DialogContentExampleDialog {
  carSaving = false;
  currentWorks: Array<string> = [];

  myForm: FormGroup = new FormGroup({
    "name": new FormControl("",
      [
        Validators.required,
        Validators.minLength(4)
      ]),
    "ownerPhone": new FormControl("", Validators.pattern("[0-9]{10}")),
    "photoUrl": new FormControl("", Validators.required),
    "gosNumber": new FormControl("", Validators.required),
    "vinCode": new FormControl("", Validators.required),
    "work": new FormControl("", Validators.required),
  });

  constructor(private carsService: CarsService, public dialogRef: MatDialogRef<DialogContentExampleDialog>) {
  }

  addWork() {
    console.log(this.myForm.controls['work'].value);
    this.currentWorks.push(this.myForm.controls['work'].value);
    this.myForm.controls['work'].reset();
    // this.currentWorks.push(this.currentWork);
    // this.currentWork=''
  }

  saveNewCar() {
    this.carSaving = true;
    this.carsService.creteNewCars(this.myForm.controls['name'].value, this.myForm.controls['ownerPhone'].value,
      this.myForm.controls['photoUrl'].value, this.currentWorks, this.myForm.controls['vinCode'].value, this.myForm.controls['gosNumber'].value).subscribe(res => {
      this.carSaving = false;
      this.dialogRef.close()
    })
  }

  toArray(value: string): void {
    this.currentWorks = value.split(/[\r\n]+/);
    console.log(this.currentWorks)
  }
}

