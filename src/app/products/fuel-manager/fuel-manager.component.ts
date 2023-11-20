import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-fuel-manager',
  templateUrl: './fuel-manager.component.html',
  styleUrls: ['./fuel-manager.component.css']
})
export class FuelManagerComponent {

  @Input() isModalOpen = false;
  selectedProduct:any = null;
  sentences: string[] = [];
  openStates: boolean[] = [];
  specificationKeys:any

  data = [
    {
      id:1,
      title: 'Omnicomm Digital Sensor',
      imageUrl:"../../../assets/fuelSensorsImages/Omnicomm Digital Sensor.jpg",
      descriptionLong:"Omnicomm Digital Sensor is a semi-automatic industrial device designed to provide high resolution sensing capabilities. It is made of high quality plastic, making it lightweight and durable. It is designed to be used in a variety of industrial settings, and is capable of providing accurate readings for a wide range of applications. The sensor is easy to use and provides reliable results. It is also backed by a warranty, providing peace of mind for users. The Omnicomm Digital Sensor is the perfect choice for any industrial setting. It is capable of providing accurate readings, and is designed to be used in a variety of industrial applications. The sensor is designed to be lightweight and durable, and is made of high quality plastic. It is easy to use and provides reliable results. The sensor is also backed by a warranty, providing peace of mind for users.",
      description: 'Omnicomm Digital Sensor is a semi-automatic industrial device designed to provide high resolution sensing capabilities. It is made of high quality plastic, making it lightweight and durable.',

      spacification:[
        {
          Price:"15470 INR/Unit",
          Minimum_Order_Quantity:"10 Piece",
          Supply_Ability:"100 Piece Per Month",
          Delivery_Time:" 10 Days",
          Resolution:"High",
          Function:"Semi Automatic",
          Product_Type:"Digital Senor",
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
      title: 'LLS 5 Omnicomm Sensor',
      imageUrl:"../../../assets/fuelSensorsImages/LLS5OmnicommSensor.jpg",
      descriptionLong:"LLS 5 Omnicomm Sensor is a semi-automatic sensor designed for industrial usage. It is made of high-quality plastic and has a high resolution that ensures accurate measurements. It is suitable for a variety of applications such as temperature monitoring, process control, and other industrial tasks. The sensor is easy to install and use, and it is reliable and durable. It is a great choice for companies looking for a reliable and efficient sensor. The sensor is designed to be user-friendly and provides accurate and reliable readings. It is also able to store data for up to five years, which makes it a great choice for long-term projects. The sensor is also able to detect a wide range of temperatures, making it suitable for various applications. The sensor is also able to provide quick and accurate readings, which makes it an ideal choice for industrial tasks. The LLS 5 Omnicomm Sensor is a great choice for companies looking for a reliable and efficient sensor. It is easy to install and use, and it is reliable and durable. It is also able to store data for up to five years, which makes it a great choice for long-term projects. The sensor is also able to detect a wide range of temperatures, making it suitable for various applications.",
      description: 'LLS 5 Omnicomm Sensor is a semi-automatic sensor designed for industrial usage. It is made of high-quality plastic and has a high resolution that ensures accurate measurements',

      spacification:[
        {
          Price:" 18570 INR/Unit",
          Material:"Plastic",
          Resolution:"High",
          Network:"Normal",
          Function:"Semi Automatic",
          Supply_Ability:"100 Piece Per Month",
          Delivery_Time:"10 Days",
          Main_Domestic_Market:"All india",
        }
      ],

      faq: [
        { 
          question: 'What is the resolution of the LLS 5 Omnicomm Sensor?', 
          answer: 'The resolution of the LLS 5 Omnicomm Sensor is high.'
        },
        { 
          question: 'What material is the LLS 5 Omnicomm Sensor made of?', 
          answer: 'The LLS 5 Omnicomm Sensor is made of high-quality plastic.' 
        },
        { 
          question: ' What is the usage of the LLS 5 Omnicomm Sensor?',
          answer: 'The LLS 5 Omnicomm Sensor is designed for industrial usage.'
        },
        { 
          question: 'What is the function of the LLS 5 Omnicomm Sensor?',
          answer: 'The LLS 5 Omnicomm Sensor is a semi-automatic sensor.'
        },
      ],
    },
    {
      id:3,
      title: 'LLS-EX 5 Omnicomm Sensor',
      imageUrl:"../../../assets/fuelSensorsImages/LLS-EX5OmnicommSensor.jpg",
      descriptionLong:"The LLS-EX 5 Omnicomm Sensor is a semi-automatic sensor designed for industrial use. It has a high-resolution and is made of durable plastic that can withstand harsh conditions. It is designed to provide accurate readings in a wide range of applications, such as in industrial automation, process control, and data acquisition. The sensor is easy to install and use, and it is ideal for a variety of applications. The LLS-EX 5 Omnicomm Sensor is a reliable and durable solution for industrial use. It is designed for high-precision readings and is made of strong and durable plastic. It is designed to provide accurate readings in a wide range of applications, such as in industrial automation, process control, and data acquisition. The sensor is easy to install and use, and it is ideal for a variety of applications. The LLS-EX 5 Omnicomm Sensor is an ideal solution for industrial use. Its high-resolution and durable plastic construction make it a reliable and durable solution for a variety of applications. It is designed for accurate readings in a wide range of applications, such as in industrial automation, process control, and data acquisition. The sensor is easy to install and use, and it is ideal for a variety of applications.",
      description: 'The LLS-EX 5 Omnicomm Sensor is a semi-automatic sensor designed for industrial use. It has a high-resolution and is made of durable plastic that can withstand harsh conditions.',

      spacification:[
        {
          Price:"19570 INR/Unit",
          Material:"Plastic",
          Resolution:"High",
          Network:"Normal",
          Product_Type:"Digital Senor",
          Function:"Semi Automatic",
          Supply_Ability:"100 Piece Per Month",
          Delivery_Time:"10 Days",
          Main_Domestic_Market:"All india",
        }
      ],
      faq: [
        { 
          question: 'What is the resolution of the LLS-EX 5 Omnicomm Sensor?', 
          answer: 'The LLS-EX 5 Omnicomm Sensor has a high-resolution.'
        },
        { 
          question: 'What is the material used in the construction of the LLS-EX 5 Omnicomm Sensor?',
          answer: 'The LLS-EX 5 Omnicomm Sensor is made of durable plastic.' 
        },
        { 
          question: 'What type of applications is the LLS-EX 5 Omnicomm Sensor suitable for?',
          answer: ' The LLS-EX 5 Omnicomm Sensor is suitable for a variety of applications, such as in industrial automation, process control, and data acquisition.'
        },
      ],
    },
    {
      id:4,
      title: 'Omnicomm Analogue Sensor',
      imageUrl:"../../../assets/fuelSensorsImages/OmnicommAnalogueSensor.jpg",
      descriptionLong:"Omnicomm Analogue Sensor is a semi-automatic sensor that is designed to provide reliable and accurate measurements in industrial settings. It is made from high-quality plastic and is capable of providing a high resolution for accurate readings. It is suitable for a variety of applications such as measuring temperature, pressure, and humidity. It is also ideal for monitoring environmental conditions in industrial settings. The Omnicomm Analogue Sensor is easy to install and operate. It comes with a user-friendly interface and is easy to configure for a variety of applications. It is also compatible with a wide range of sensors and can be used in a variety of industrial settings. The sensor is designed to be durable and reliable, making it a great choice for long-term use. The Omnicomm Analogue Sensor is a great choice for industrial settings. It is designed to provide reliable and accurate readings in a variety of applications. It is also easy to install and operate and is compatible with a wide range of sensors. It is a great choice for those who need reliable and accurate readings in industrial settings.",
      description: 'Omnicomm Analogue Sensor is a semi-automatic sensor that is designed to provide reliable and accurate measurements in industrial settings. It is made from high-quality plastic and is capable of providing a high resolution for accurate readings. It is suitable for a variety of applications such as measuring temperature, pressure, and humidity.',

      spacification:[
        {
          Price:"15470 INR/Unit",
          Material:"Plastic",
          Resolution:"High",
          Network:"Normal",
          Product_Type:"Digital Senor",
          Function:"Semi Automatic",
          Supply_Ability:"100 Piece Per Month",
          Delivery_Time:"10 Days",
          Main_Domestic_Market:"All india",
        }
      ],
      faq: [
        { 
          question: 'What is the material used to make the Omnicomm Analogue Sensor?', 
          answer: 'The Omnicomm Analogue Sensor is made from high-quality plastic.'
        },
        { 
          question: 'What kind of resolution does the Omnicomm Analogue Sensor provide?',
          answer: 'The Omnicomm Analogue Sensor provides a high resolution for accurate readings.' 
        },
        { 
          question: 'What kind of applications is the Omnicomm Analogue Sensor suitable for?',
          answer: 'The Omnicomm Analogue Sensor is suitable for measuring temperature, pressure, and humidity. It is also ideal for monitoring environmental conditions in industrial settings.'
        },
        { 
          question: ' Is the Omnicomm Analogue Sensor easy to install and operate?',
          answer: 'Yes, the Omnicomm Analogue Sensor is easy to install and operate. It comes with a user-friendly interface and is easy to configure for a variety of applications.'
        },
        { 
          question: 'Is the Omnicomm Analogue Sensor compatible with a wide range of sensors?',
          answer: 'Yes, the Omnicomm Analogue Sensor is compatible with a wide range of sensors.'
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