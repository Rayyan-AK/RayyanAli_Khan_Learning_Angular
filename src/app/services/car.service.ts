import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../Shared/Models/car';
import { cars } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() {}

  getCars(): Observable<Car[]> {
    return of(cars);
  }

  getCarByVin(vin: string): Observable<Car | undefined> {
    const car = cars.find(c => c.vin === vin);
    return of(car);
  }

  addCar(newCar: Car): Observable<Car[]> {
    cars.push(newCar);
    return of(cars);
  }

  updateCar(updatedCar: Car): Observable<Car[]> {
    const index = cars.findIndex(c => c.vin === updatedCar.vin);
    if (index !== -1) {
      cars[index] = updatedCar;
    }
    return of(cars);
  }

  deleteCar(vin: string): Observable<Car | undefined> {
    const index = cars.findIndex(c => c.vin === vin);
    if (index !== -1) {
      const removed = cars.splice(index, 1)[0];
      return of(removed);
    }
    return of(undefined);
  }
}
