import { Component, signal, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { Car } from './Shared/Models/car';
import { CarListComponent } from './car-list/car-list.component';
import { CarService } from './Services/car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NgForOf, NgIf, CarListComponent, RouterLink, RouterLinkActive,
  ],
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
