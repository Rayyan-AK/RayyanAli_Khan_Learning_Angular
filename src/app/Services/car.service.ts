import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from 'rxjs';
import {Car} from '../Shared/Models/car';
import {cars} from '../data/mock-content';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'api/cars';
  private carList: Car[] = cars;
  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    // return of(cars);
    return this.http.get<Car[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCarByVin(vin: string): Observable<Car | undefined> {
    // const car = cars.find(c => c.vin === vin);
    // return of(car);
    return this.http.get<Car>(`${this.apiUrl}/${vin}`).pipe(catchError(this.handleError));
  }

  addCar(newCar: Car): Observable<Car> {
    // cars.unshift(newCar);
    // return of(cars);
    return this.http.post<Car>(this.apiUrl, newCar).pipe(catchError(this.handleError));
  }

  updateCar(updatedCar: Car): Observable<Car | undefined> {
    // const index = cars.findIndex(c => c.vin === updatedCar.vin);
    // if (index !== -1) {
    //   updatedCar.image = updatedCar.image || cars[index].image;
    //   cars[index] = updatedCar;
    // }
    // return of(cars);
    const url = `${this.apiUrl}/${updatedCar.vin}`;
    return this.http.put<Car>(url, updatedCar).pipe(catchError(this.handleError));
  }

  deleteCar(vin: string): Observable<{}> {
    // const index = cars.findIndex(c => c.vin === vin);
    // if (index !== -1) {
    //   const removed = cars.splice(index, 1)[0];
    //   return of(removed);
    // }
    // return of(undefined);
    const url = `${this.apiUrl}/${vin}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
