import { Component } from '@angular/core';

@Component({
  selector: 'app-fuel-monitoring',
  templateUrl: './fuel-monitoring.component.html',
  styleUrls: ['./fuel-monitoring.component.css']
})
export class FuelMonitoringComponent {
  
  firtsAccordionData = [
    {
      title: "Fuel Theft Prevention",
      content: "Stay steps ahead from pilferage with the help of our fuel tracking device. Get instant alerts about fuel drainage and know your vehicle’s average fuel consumption.",
      content_2: "",
      isOpen: false
    },
    {
      title: "Remote Tank Monitoring",
      content: "LocoNav’s robust fuel consumption meter ensures that you get accurate fuel refill and drain location updates on the map, and are informed about the fuel level status.",
      content_2: "",
      isOpen: false
    },
    {
      title: "Fuel Efficiency Reports",
      content: "Get precise data about the complete fuel log of your vehicle. Obtain detailed reports about refuelling, drainage, and mileage with our fuel tank level sensor.",
      content_2: "",
      isOpen: false
    },
  ];

  secondAccordionData = [
    {
      title: "Fuel Wastage Detection",
      content: "Leverage LocoNav’s fuel monitoring sensor to be mindful of fuel wastage by idling and adverse driving practices, and save big on fuel costs.",
      content_2: "",
      isOpen: false
    },
    {
      title: "Capacitance-Based Technology",
      content: "Our IP-69K rated fuel sensor utilises state-of-the-art capacitance-based technology that comes with reliable and consistent data delivery, a fireproof body, and minimal maintenance.",
      content_2: "",
      isOpen: false
    },
    {
      title: "All Vehicles Supported",
      content: "With a wide application range, our fuel monitoring system can be fitted in tanks of all kinds of vehicles, ranging from cars to commercial vehicles.",
      content_2: "",
      isOpen: false
    },
  ];

  toggleSection(index: number) {
    this.firtsAccordionData[index].isOpen = !this.firtsAccordionData[index].isOpen;
  }

  handleSecondAccordion(index: number) {
    this.secondAccordionData[index].isOpen = !this.secondAccordionData[index].isOpen;
  }

}
