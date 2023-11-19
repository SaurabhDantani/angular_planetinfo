import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-fleet-manangment',
  templateUrl: './fleet-manangment.component.html',
  styleUrls: ['./fleet-manangment.component.css'],
  imports:[CommonModule]
})
export class FleetManangmentComponent {
  accordionOne = [
    {
      title: 'Real-Time GPS Fleet Tracking',
      description: 'Irrespective of the number of vehicles in your fleet, LocoNav’s GPS fleet management software is determined to monitor & protect your asset from theft or harm.'
    },

    {
      title: 'Fleet Lock',
      description: 'Our fleet management solutions allow you to turn on the vehicle lock from from PlanetInfo’s fleet',
      description_2: ''
    },
    {
      title: 'Live Alerts',
      description: 'Get live over-speeding alerts, alerts on entry and exit points, monitor idling in real time, etc., and get vehicle services and maintenance alerts.'
    },
  ];

  accordionTwo = [
    {
      title: 'Control Fleet Operations',
      description: 'Manage every crucial aspect of your daily fleet operations with just a click. Keep check on your drivers, their driving assignments, and their geolocation at any time.'
    },

    {
      title: 'Fleet Health',
      description: 'Get diagnostic, mileage, and health reports of all the vehicles in your fleet so that you can worry less about your fleet’s well-being and concentrate more on expanding your business.',
      description_2: ''
    },
    {
      title: 'Manage Fleets Fuel Cost ',
      description: 'Our commercial GPS fleet tracking can help you reduce a good amount of your fuel expenses. Track driving behavior, reduce idling time and cut down on fuel related costs.'
    },
  ];

  openStates: boolean[] = [];
  accordionTwoState: boolean[] = [];

  toggleDetails(index: number) {
    this.openStates[index] = !this.openStates[index];
  }

  toggleTwo(index: number) {
    this.accordionTwoState[index] = !this.accordionTwoState[index];
  }
}
