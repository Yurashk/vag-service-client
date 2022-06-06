import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CarsInterface} from "../models";

@Injectable({
  providedIn: "root",
})
export class CarsService {

  constructor(private http: HttpClient) {
  }

  getUserCars(userId: string) {
    return this.http.get<CarsInterface[]>(
      `${environment.baseEndpoint}app/getUserCars/${userId}`
    );
  }

  getCarById(carId: string) {
    return this.http.get<CarsInterface>(
      `${environment.baseEndpoint}app/getCar/${carId}`
    );
  }

  changeCarWorksById(id: string, works: Array<string>) {
    return this.http.patch<CarsInterface>(
      `${environment.baseEndpoint}app/addNewWorks`, {
        id, works
      }
    );
  }

  changeCarById(id: string, works: Array<string>, worksInProgress: Array<string>, worksDone: Array<string>) {
    return this.http.patch<CarsInterface>(
      `${environment.baseEndpoint}app/changeCarItems`, {
        id, works, worksInProgress, worksDone
      }
    );
  }

  creteNewCars(name: string, ownerPhone: string, photoUrl: string, works: Array<string>, vinCode: string, gosNumber: string) {
    return this.http.post<CarsInterface[]>(
      `${environment.baseEndpoint}app/carCreate`, {name, ownerPhone, photoUrl, works, vinCode, gosNumber}
    );
  }

  getAllCars() {
    return this.http.get<CarsInterface[]>(
      `${environment.baseEndpoint}app/getAllCars`
    );
  }
}
