import {Component, OnInit} from '@angular/core';
import { Car } from "../Shared/Models/car";
import {ActivatedRoute} from '@angular/router';
import {cars} from '../data/mock-content';
import {NgIf} from "@angular/common";
import {CarService} from '../Services/car.service';

@Component({
  selector: 'app-car-detail',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {

  car: Car | undefined;
  cars: Car[] = [];
  error: string|null = null;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) {}

    ngOnInit(): void {
        // this.route.paramMap.subscribe(params=> {
        //   const vin = params.get('vin');
        //   this.car = cars.find(c => c.vin === vin);
        // });

        this.carService.getCars().subscribe({
          next: (carList: Car[]) => {
            this.cars = carList;
            this.error = null; // Clear any previous errors

            // Subscribe to paramMap changes to update the page view
            this.route.paramMap.subscribe(params => {
              const vin = params.get('vin');
              if (vin) {
                this.car = this.cars.find(c => c.vin === vin);
              }
            });
          },
          error: (err) => {
            this.error = 'Error fetching cars';
            console.error('Error fetching cars:', err);
          }
        });
    }
}
