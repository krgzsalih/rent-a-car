import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { CarupdateComponent } from './components/carupdate/carupdate.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarListComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'detail/:id', component: CardetailsComponent },
  { path: 'update/:id', component: CarupdateComponent },

  { path: 'brand/:id', component: CarListComponent },
  { path: 'brand/:id/detail/:id', component: CardetailsComponent },
  { path: 'brand/:id/update/:id', component: CarupdateComponent },

  { path: 'brand-add', component: BrandAddComponent },
  { path: 'car-add', component: CarAddComponent },
  { path: 'brand-update', component: BrandUpdateComponent },

  { path: 'color/:colorId/detail/:id', component: CardetailsComponent },
  { path: 'brand/:id/color/:colorId', component: CarListComponent },
  { path: 'color/:colorId', component: CarListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
