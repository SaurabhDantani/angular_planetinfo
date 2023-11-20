import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { VideocarasouleComponent } from './components/videocarasoule/videocarasoule.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProductsComponent } from './components/products/products.component';
import { FuelMonitoringComponent } from './products/fuel-monitoring/fuel-monitoring.component';
import { GpstrackersComponent } from './products/gpstrackers/gpstrackers.component';
import { FuelManagerComponent } from './products/fuel-manager/fuel-manager.component';
import { CamerasComponent } from './products/cameras/cameras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    VideocarasouleComponent,
    HeroComponent,
    FooterComponent,
    LogoComponent,
    ProductsComponent,
    FuelMonitoringComponent,
    GpstrackersComponent,
    FuelManagerComponent,
    CamerasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
