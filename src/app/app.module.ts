import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from 'src/app/layouts/navi/navi.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { CarupdateComponent } from './components/carupdate/carupdate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandSearchPipe } from './pipes/brand-search.pipe';
import { CarSearchPipe } from './pipes/car-search.pipe';
import { SearchSpecsComponent } from './components/search-specs/search-specs.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoriesComponent,
    CarListComponent,
    CardetailsComponent,
    CarupdateComponent,
    CarAddComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    BrandSearchPipe,
    CarSearchPipe,
    SearchSpecsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ToastContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
