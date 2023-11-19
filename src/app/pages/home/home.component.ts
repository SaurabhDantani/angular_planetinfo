import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  assets = [
    {
      title: 'MUCH MORE THAN TELEMATICS',
      subTitle: 'Monitor All Your Assets',
      description:
        'Simplify the way your assets move and perform from a single dashboard. Go beyond basic track-and-trace with a power-packed combination of vehicle tracking, performance scorecards, insightful reports, and real-time alerts.',
      imageUrl: 'https://loconav.com/static/a17c83e62e218b50281790991b2f89f6/98dd3/monitor-assets-new.webp'
    },
    
    {
      title: 'SAFETY BACKED BY TECHNOLOGY',
      subTitle: 'Protect Your Vehicles and Cargo',
      description:
        'Keep your vehicles, cargo, and drivers safe with the power of AI and IoT. Combine advanced video telematics, state-of-the-art sensors, remote immobilization, and SOS alerts to be your own fleet safety officer.',
      imageUrl: 'https://loconav.com/static/45f0c858f10daeb17fd9f97f3ec97143/9e35f/protect-vehicle-new.webp'
    },
    {
      title: 'POWERING POSITIVE BUSINESS IMPACT',
      subTitle: 'Enhance Your Fuel Economy',
      description:
        'Lower fuel costs and optimise your operations with powerful sensors. Utilise rich analytics, fuel efficiency reports, instant refuelling and drainage alerts, and increase fuel efficiency.',
      imageUrl: 'https://loconav.com/static/2369255be10bbebbfbf424c518135d05/6fbbd/enhance-fuel-economy-new.webp'
    },

    {
      title: 'PERFORMANCE ON A NEW LEVEL',
      subTitle: 'Manage Your Drivers and Their Potential',
      description:
        'Gain real-time visibility into driver behaviour and productivity. Leverage ADAS, DMS, gamified scorecards, geofencing, and trip management to improve driver retention and performance.',
      imageUrl: 'https://loconav.com/static/1fa4ca144e0e58b623f6bde2a227731f/31e79/manage-drivers-new.webp'
    },
    
  ]
}
