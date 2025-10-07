import {Component, OnInit} from '@angular/core';
import {CarListItemComponent} from '../car-list-item/car-list-item.component';
import {NgForOf, NgIf} from '@angular/common';
import {Car} from '../Shared/Models/car';
import {CarService} from '../services/car.service';


@Component({
  selector: 'app-car-list',
  imports: [
    CarListItemComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})

export class CarListComponent implements OnInit{

  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }


}
