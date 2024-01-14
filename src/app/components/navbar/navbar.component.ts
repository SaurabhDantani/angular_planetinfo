import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen: boolean = false;

  closeMenu() {
    this.menuOpen = false;
  }

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
          url: '/gpstrackers',
          description: 'GPS tracking, trip & inventory management'
        },
        {
          title: 'Cameras',
          icon: '../../../assets/truck.png',
          url: '/cameras',
          description: 'security camera system designed to provide superior image'
        },
      ],

      secondSubItems: [
        {
          title: 'Fuel Monitors',
          icon: '../../../assets/truck.png',
          url: '/fuelmanager',
          description: 'Omnicomm Digital Sensor is a semi-automatic industrial device'
        },
      ],

    },
  ];

  secondMegaMenuItems: any[] = [
    {
      title: 'Solution',
      firstMegaSubItems: [
        {
          title: 'Fleet Management Solution',
          icon: '../../../assets/truck.png',
          url: '/fleet',
          description: ''//'GPS tracking, trip & inventory management'
        },
        // {
        //   title: 'Cameras',
        //   icon: '../../../assets/truck.png',
        //   url: '/cameras',
        //   description: 'security camera system designed to provide superior image'
        // },
      ],

      secondMegaSubItems: [
        {
          title: 'Transpotation',
          icon: '../../../assets/truck.png',
          url: '/fuel',
          description: ''//'Improve Turnnaround Time, Increase Tripe'
        },
      ],

    },
  ];

  openWhatsApp(){
    const api = "https://wa.me/917567358252?"
    window.location.href =api
  }
}
