import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footerMenu: any[] = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Gps Trackers', link: '/gpstrackers' },
    { label: 'Fuel Sensores', link: '/fuelmanager' },
    { label: 'Cameras', link: '/cameras' },
    { label: 'Privacy', link: '/privacy' },
  ];
}
