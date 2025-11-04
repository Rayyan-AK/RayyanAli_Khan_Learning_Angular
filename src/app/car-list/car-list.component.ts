import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Car} from '../Shared/Models/car';
import {CarService} from '../Services/car.service';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})

export class CarListComponent implements OnInit{

  cars: Car[] = [];
  error: string | null = null;

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.carService.getCars().subscribe((data: Car[]) => {
    //   this.cars = data;
    // });

    this.carService.getCars().subscribe({
      next: (data: Car[]) => {
        this.cars = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching cars';
        console.error("Error fetching Cars", err);
      },
      complete: () => console.log("Car data fetch complete!")
    });
  }

  OnDelete(vin: string): void {
    // this.carService.deleteCar(vin);

    this.carService.deleteCar(vin).subscribe({
      next: () => {
        // Remove deleted car from the local list to update the view instantly
        this.cars = this.cars.filter(c => c.vin !== vin);
        console.log(`Car with VIN ${vin} deleted`);
      },
      error: (err) => {
        this.error = 'Error deleting car';
        console.error('Delete error:', err);
      }
    });
  }

}
