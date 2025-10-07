import { Component } from '@angular/core';
import {CarListItemComponent} from '../car-list-item/car-list-item.component';
import {NgForOf, NgIf} from '@angular/common';


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

export class CarListComponent {

}
