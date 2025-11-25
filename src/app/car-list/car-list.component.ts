import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Car} from '../Shared/Models/car';
import {CarService} from '../Services/car.service';
import {Router, RouterLink} from '@angular/router';
import {FullSpecPipe} from '../Pipes/full-spec.pipe';
import {PriceRangePipe} from '../Pipes/price-range.pipe';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatList, MatListItem} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-car-list',
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    FullSpecPipe,
    PriceRangePipe,
    NgClass,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardSubtitle,
    MatIcon,
    MatList,
    MatListItem,
    MatIcon,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
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
