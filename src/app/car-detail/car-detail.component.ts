import {Component, OnInit} from '@angular/core';
import { Car } from "../Shared/Models/car";
import {ActivatedRoute} from '@angular/router';
import {cars} from '../data/mock-content';
import {CurrencyPipe, DatePipe, NgClass, NgIf, UpperCasePipe} from "@angular/common";
import {PriceRangePipe} from '../Pipes/price-range.pipe';
import {HighlightOnFocusDirective} from '../Directives/highlight-on-focus.directive';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-car-detail',
  imports: [
    NgIf,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    NgClass,
    PriceRangePipe,
    HighlightOnFocusDirective,

    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    MatRippleModule,
    MatIconModule,
    MatCardImage
  ],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute
  ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params=> {
          const vin = params.get('vin');
          this.car = cars.find(c => c.vin === vin);
        });
    }
}
