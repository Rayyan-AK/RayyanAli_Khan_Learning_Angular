import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { Car } from './Shared/Models/car';
import { CarListComponent } from './car-list/car-list.component';
import { CarListItemComponent } from './car-list-item/car-list-item.component';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, NgIf, CarListComponent, CarListItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('RayyanAli-Khan-Learning-Angular');
  selectedCar: Car | undefined;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCarByVin('VIN001').subscribe((car: Car | undefined) => {
      this.selectedCar = car;
    });
  }
}
