import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {CarListComponent} from './app/car-list/car-list.component';
import {ModifyCarComponent} from './app/modify-car/modify-car.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {CarDetailComponent} from './app/car-detail/car-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:vin', component: CarDetailComponent},
  { path: 'modify-car', component: ModifyCarComponent },
  { path: '**', component: PageNotFoundComponent }
];
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
