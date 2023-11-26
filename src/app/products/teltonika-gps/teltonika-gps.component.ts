import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-teltonika-gps',
  templateUrl: './teltonika-gps.component.html',
  styleUrls: ['./teltonika-gps.component.css']
})
export class TeltonikaGpsComponent {
  @Input() isModalOpen = false;
  selectedProduct:any = null;
  sentences: string[] = [];
  openStates: boolean[] = [];
  specificationKeys:any

  data = [
    {
      id:1,
      title: 'Teltonika FMB120',
      imageUrl:"../../../assets/teltoniakaTerminals/TeltonikaFMB120.png",
      descriptionLong:"FMB120 is a tracking terminal with GNSS and GSM connectivity, which is able to collect device coordinates and transfer them via GSM network to a server. This device is perfectly suitable for applications, which require the location acquirement of remote objects.",
      description: 'Teltonika FMB120 is a professional GLONASS / GPS tracker. Designed specifically for vehicle tracking and logistics solutions. Compact, has an extended set of connectors, is equipped with temperature control and the ability to connect CAN adapters.',

      spacification:[
        {
          "Price":"3750 INR/Unit",
          "Minimum Order Quantity":"10 Piece",
          "Supply Ability":"100 Piece Per Month",
          "Delivery Time":" 10 Days",
          "Product Type":'Teltonika Terminal',
          "Function":"Semi Automatic",
          "Application":' Commercial',
          "Main Domestic Market":"All india"
        }
      ],
    },
    {
      id:2,
      title: 'Teltonika FMB920',
      imageUrl:"../../../assets/teltoniakaTerminals/TeltonikaFMB920.png",
      descriptionLong:"FMB920 is light real-time tracking terminal with GNSS, GSM and Bluetooth connectivity which is able to collect device coordinates and other useful data and transfer them via GSM network to server. Bluetooth peripherals can greatly expand device functionality wirelessly.",
      description: 'FMB920 is a slim design easily fitted tracker with GNSS/GPS internal antennas, flash memory, integrated backup battery, accelerometer, inputs/output and various BLE 4.0 connectivity sensors and beacons support.',

      spacification:[
        {
          "Price":" 2880 INR/Unit",
          "Minimum Order Quantity":"10 Piece",
          "Supply Ability":"100 Piece Per Month",
          "Delivery Time":" 10 Days",
          "Product Type":'Teltonika Terminal',
          "Function":"Semi Automatic",
          "Application":' Commercial',
          "Main Domestic Market":"All india"
        }
      ],

      // faq: [
      //   { 
      //     question: 'What is the resolution of the LLS 5 Omnicomm Sensor?', 
      //     answer: 'The resolution of the LLS 5 Omnicomm Sensor is high.'
      //   }
      // ],
    },
    {
      id:3,
      title: 'Teltonika FMB125',
      imageUrl:"../../../assets/teltoniakaTerminals/TeltonikaFMB125.png",
      descriptionLong:"FMB125 is a compact GPS / GSM tracker with internal high gain GSM antenna and external GNSS antenna. The purpose of the device is to collect navigation coordinates and other information from the car and then transfer this information via the GSM channel to the server.",
      description: 'FMB125 is a tracking terminal with GNSS and GSM connectivity, which is able to collect device coordinates and transfer them via GSM network to a server. This device is perfectly suitable for applications, which require the location acquirement of remote objects.',

      spacification:[
        {
          "Price":"  4570 INR/Unit",
          "Minimum Order Quantity":"10 Piece",
          "Supply Ability":"100 Piece Per Month",
          "Delivery Time":" 10 Days",
          "Product Type":'Teltonika Terminal',
          "Function":"Semi Automatic",
          "Application":' Commercial',
          "Main Domestic Market":"All india"
        }
      ],
      // faq: [
      //   { 
      //     question: 'What is the resolution of the LLS-EX 5 Omnicomm Sensor?', 
      //     answer: 'The LLS-EX 5 Omnicomm Sensor has a high-resolution.'
      //   },
      // ],
    },
  ];

  selectedItems(id:any) {
    this.selectedProduct = this.data.find(item=> item.id === id)
    this.sentences = this.getSentences();
    this.getKeys(this.selectedProduct.spacification);
    this.openModal() 
  }

  //split sentences when come.
  getSentences(): string[] {
    return this.selectedProduct.descriptionLong.split('.').filter((sentence: string) => sentence.trim() !== '');
  }

  toggleDetails(index: number) {
    this.openStates[index] = !this.openStates[index];
  }

  getSpecifications(): any[] {
    debugger
    return this.selectedProduct ? this.selectedProduct.spacification : [];
  }

  getKeys(obj: any={}): string[] {
    return Object.keys(obj);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
  }
}
