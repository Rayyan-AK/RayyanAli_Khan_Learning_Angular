import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {Routes} from '@angular/router';
import {CarListComponent} from './app/car-list/car-list.component';
import {CarListItemComponent} from './app/car-list-item/car-list-item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarListItemComponent },
  { path: '**', redirectTo: '/cars' }
];
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
