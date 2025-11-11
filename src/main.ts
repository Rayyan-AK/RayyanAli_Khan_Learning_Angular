import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {CarListComponent} from './app/car-list/car-list.component';
export const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent }, //eagerly
  // { path: 'cars/:vin', component: CarDetailComponent},
  { path: 'cars/:vin', loadComponent: ()=> import('./app/car-detail/car-detail.component').then(m => m.CarDetailComponent) },
  // { path: 'modify-car', component: ModifyCarComponent },
  { path: 'modify-car', loadComponent: () => import('./app/modify-car/modify-car.component').then(m => m.ModifyCarComponent) },
  // { path: 'modify-car/:vin', component: ModifyCarComponent },
  { path: 'modify-car/:vin', loadComponent: () => import('./app/modify-car/modify-car.component').then(m => m.ModifyCarComponent) },
  // { path: '**', component: PageNotFoundComponent }
  { path: '**', loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
