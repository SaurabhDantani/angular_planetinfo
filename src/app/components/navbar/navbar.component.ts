import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  normalMenuItems: any[] = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  firstMegaMenuItems: any[] = [
    {
      title: 'Products',
      firstSubItems: [
        {
          title: 'GPS Trackers',
          icon: '../../../assets/truck.png',
          url: '/fuel',
          description: 'GPS tracking, trip & inventory management'
        },
      ],

      secondSubItems: [
        {
          title: 'Fleet Management Solution',
          icon: '../../../assets/truck.png',
          url: '/fleet',
          description: 'GPS tracking, trip & inventory management'
        },
      ],

    },
  ];
}
