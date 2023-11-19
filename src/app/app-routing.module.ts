import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { FleetManangmentComponent } from './products/fleet-manangment/fleet-manangment.component';
import { FuelMonitoringComponent } from './products/fuel-monitoring/fuel-monitoring.component';
import { HeroComponent } from './components/hero/hero.component';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nav', component: NavbarComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'fleet', component:FleetManangmentComponent},
  {path: 'fuel', component:FuelMonitoringComponent},
  {path: 'hero', component:HeroComponent},
  {path: 'demo', component:DemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
