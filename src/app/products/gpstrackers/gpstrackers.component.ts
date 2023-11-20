import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gpstrackers',
  templateUrl: './gpstrackers.component.html',
  styleUrls: ['./gpstrackers.component.css']
})
export class GpstrackersComponent {
  @Input() isModalOpen = false;
  selectedProduct:any = null;
  sentences: string[] = [];
  openStates: boolean[] = [];
  specificationKeys:any

  data = [
    {
      id:1,
      title: 'Bharat 101 Data Sheet Device',
      imageUrl:"https://www.itriangle.in/wp-content/uploads/ais-140-certified-gps-tracking-device.png",
      descriptionLong:"Introducing the Bharat 101 Data Sheet Device, the perfect storage solution for any business. This external hard drive is designed to provide users with a reliable and secure way to store and access data. The device has a sleek and stylish design and is compatible with USB interface, making it perfect for office and home use. The device has a large capacity of up to 1TB, so you can store all your important documents, photos, videos, music, and more. It also comes with a warranty, so you can be sure that your data is safe and secure. The Bharat 101 Data Sheet Device is designed to be highly efficient and reliable. It has a fast read/write speed, so you can access your data quickly and easily. The device is also designed to be energy efficient, so you can save money on your electricity bills. The device is also designed to be durable and long-lasting, so you can use it for years without any problems. The Bharat 101 Data Sheet Device is the perfect storage solution for any business. It is designed to provide users with a reliable and secure way to store and access data. It is also designed to be energy efficient and durable, so you can use it for years without any problems.",
      description: 'Introducing the Bharat 101 Data Sheet Device, the perfect storage solution for any business.',

      spacification:[
        {
          Price:"8950 INR/Unit",
          Minimum_Order_Quantity:"10 Piece",
          Supply_Ability:"100 Piece Per Month",
          Delivery_Time:" 10 Days",
          Main_Domestic_Market:"All india"
        }
      ],
      faq: [
        { 
          question: 'How much data can the Bharat 101 Data Sheet Device store?', 
          answer: 'The device has a large capacity of up to 1TB, so you can store all your important documents, photos, videos, music, and more.'
        },
        { 
          question: 'Is the Bharat 101 Data Sheet Device compatible with USB?', 
          answer: 'Yes, the device is compatible with USB interface, making it perfect for office and home use.' 
        },
        { 
          question: 'Is the Bharat 101 Data Sheet Device energy efficient?', 
          answer: 'Yes, the device is designed to be energy efficient, so you can save money on your electricity bills.'
        },
        { 
          question: 'Does the Bharat 101 Data Sheet Device come with a warranty?', 
          answer: 'Yes, the device comes with a warranty, so you can be sure that your data is safe and secure.' 
        },
      ],
    },
    {
      id:2,
      title: 'EV02 Basic GPS Tracker',
      imageUrl:"https://hkimg.bjyyb.net/sites/75500/75711/20231008154057805.webp?x-oss-process=image/resize,m_lfit,w_600/quality,q_75",
      descriptionLong:"The EV02-Basic GPS Tracker is the perfect GPS tracking device for businesses and individuals alike. This device features a digital display, Bluetooth-enabled DVD/VCD capabilities, and a powerful network that allows for a reliable and accurate tracking experience. It is also designed to be easy to use and comes with a variety of features that make it an excellent choice for anyone looking to track their vehicles or other assets. The EV02-Basic GPS Tracker is designed to be a reliable and accurate tracking device. It is powered by a powerful network that allows for a reliable and accurate tracking experience. This device also features a digital display that allows users to quickly and easily view their location in real-time. Additionally, it has a Bluetooth-enabled DVD/VCD capabilities that allow users to access their vehicles data while on the go. The EV02-Basic GPS Tracker is a great choice for businesses and individuals alike. It is designed to be easy to use and is equipped with a variety of features that make it an excellent choice for anyone looking to track their vehicles or other assets. It is also designed to be reliable and accurate, so users can rest assured that their tracking data is accurate.",
      description: 'The EV02-Basic GPS Tracker is the perfect GPS tracking device for businesses and individuals alike. This device features a digital display, Bluetooth-enabled DVD/VCD capabilities, and a powerful network that allows for a reliable and accurate tracking experience.',

      spacification:[
        {
          Price:"1200 INR/Unit",
          Minimum_Order_Quantity:" 10 Piece",
          Supply_Ability:"100 Piece Per Month",
          Delivery_Time:"10 Days",
          Main_Domestic_Market:"All india",
          Network:"Normal",
          Function:"Bluetooth-Enabled DVD/VCD",
        }
      ],

      faq: [
        { 
          question: 'What type of network does the EV02-Basic GPS Tracker use?', 
          answer: 'The EV02-Basic GPS Tracker uses a powerful network that allows for a reliable and accurate tracking experience.'
        },
        { 
          question: 'What type of display does the EV02-Basic GPS Tracker have?', 
          answer: 'The EV02-Basic GPS Tracker has a digital display that allows users to quickly and easily view their location in real-time.' 
        },
        { 
          question: 'Does the EV02-Basic GPS Tracker have Bluetooth-enabled DVD/VCD capabilities?',
          answer: 'Yes, the EV02-Basic GPS Tracker has Bluetooth-enabled DVD/VCD capabilities that allow users to access their vehicles data while on the go.'
        },
        { 
          question: 'Is the EV02-Basic GPS Tracker easy to use?',
          answer: 'Yes, the EV02-Basic GPS Tracker is designed to be easy to use and is equipped with a variety of features that make it an excellent choice for anyone looking to track their vehicles or other assets.'
        },
      ],
    },
    {
      id:3,
      title: 'AT4-Megnate Portable GPS',
      imageUrl:"http://www.iconcox.co.in/wp-content/uploads/2017/12/at4.png",
      descriptionLong:"The AT4-Megnate Portable GPS is a revolutionary device designed to make navigation easier than ever before. It comes with a digital display, Bluetooth-enabled DVD/VCD and a GPS tracker, making it a must-have for those who are always on the go. The device is also hand-held, making it even more convenient for users. It is perfect for those who need to find their way in unfamiliar areas or who just want to track their progress while out and about. The AT4-Megnate Portable GPS is designed to be both reliable and accurate, giving you the best possible navigation experience. It has a powerful processor and a wide range of features, including a voice guidance system, route optimization, and a built-in compass. It also has a long battery life, so you can be sure that you wont run out of power while youre out and about. The AT4-Megnate Portable GPS is perfect for those who need to stay connected while on the go. It has a Bluetooth-enabled DVD/VCD, so you can easily connect your device to other Bluetooth-enabled devices. This allows you to easily share information and stay connected with your friends and family while youre on the go.",
      description: 'The AT4-Megnate Portable GPS is a revolutionary device designed to make navigation easier than ever before. It comes with a digital display, Bluetooth-enabled DVD/VCD and a GPS tracker,making it a must-have for those who are always on the go.',

      spacification:[
        {
          Price:"8500 INR/Unit",
          Minimum_Order_Quantity:"10 Piece",
          Supply_Ability:"100 Piece Per Month",
          Delivery_Time:"10 Days",
          Display:"Digital",
          Main_Domestic_Market:"All india"
        }
      ],
      faq: [
        { 
          question: 'What type of GPS is the AT4-Megnate Portable GPS?', 
          answer: 'The AT4-Megnate Portable GPS is a hand-held GPS tracker with a digital display and Bluetooth-enabled DVD/VCD.'
        },
        { 
          question: 'What features does the AT4-Megnate Portable GPS have?',
          answer: 'The AT4-Megnate Portable GPS has a voice guidance system, route optimization, a built-in compass, and a long battery life. It also has a Bluetooth-enabled DVD/VCD, so you can easily connect your device to other Bluetooth-enabled devices.' 
        },
        { 
          question: ' Is the AT4-Megnate Portable GPS reliable and accurate?',
          answer: 'Yes, the AT4-Megnate Portable GPS is designed to be both reliable and accurate, giving you the best possible navigation experience.'
        },
        { 
          question: 'Who is the AT4-Megnate Portable GPS suitable for?',
          answer: 'The AT4-Megnate Portable GPS is perfect for those who need to find their way in unfamiliar areas or who just want to track their progress while out and about. It is also perfect for those who need to stay connected while on the go.' 
        },
      ],
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
