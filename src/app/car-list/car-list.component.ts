import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Car} from '../Shared/Models/car';
import {CarService} from '../Services/car.service';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-car-list',
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

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  OnDelete(vin: string): void {
    this.carService.deleteCar(vin);
  }

}
