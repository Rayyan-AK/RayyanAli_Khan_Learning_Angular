import { Component, signal, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { Car } from './Shared/Models/car';
import { CarListComponent } from './car-list/car-list.component';
import { CarService } from './Services/car.service';
import {MatToolbar} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CarListComponent, RouterLink, RouterLinkActive, MatToolbar, MatIconModule, MatButton],
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
