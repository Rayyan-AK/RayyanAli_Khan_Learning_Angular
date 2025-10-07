import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Car} from '../Shared/Models/car';
import {CarListComponent} from '../data/mock-content'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() {}

  getCars(): Observable<Car[]> {
    return of(CarListComponent.cars);
  }
}
