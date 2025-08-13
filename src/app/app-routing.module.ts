import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { FleetManangmentComponent } from './products/fleet-manangment/fleet-manangment.component';
import { FuelMonitoringComponent } from './products/fuel-monitoring/fuel-monitoring.component';
import { HeroComponent } from './components/hero/hero.component';
import { GpstrackersComponent } from './products/gpstrackers/gpstrackers.component';
import { FuelManagerComponent } from './products/fuel-manager/fuel-manager.component';
import { CamerasComponent } from './products/cameras/cameras.component';
import { TeltonikaGpsComponent } from './products/teltonika-gps/teltonika-gps.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavbarComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'fleet', component: FleetManangmentComponent },
  { path: 'fuel', component: FuelMonitoringComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'gpstrackers', component: GpstrackersComponent },
  { path: 'fuelmanager', component: FuelManagerComponent },
  { path: 'cameras', component: CamerasComponent },
  { path: 'teltonika', component: TeltonikaGpsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
