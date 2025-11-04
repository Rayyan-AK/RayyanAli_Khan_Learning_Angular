import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {CarListComponent} from './app/car-list/car-list.component';
import {ModifyCarComponent} from './app/modify-car/modify-car.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {CarDetailComponent} from './app/car-detail/car-detail.component';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app/Services/in-memory-data.service';

export const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:vin', component: CarDetailComponent},
  { path: 'modify-car', component: ModifyCarComponent },
  { path: 'modify-car/:vin', component: ModifyCarComponent },
  { path: '**', component: PageNotFoundComponent }
];
bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }))
  ],
}).catch((err) => console.error(err));
