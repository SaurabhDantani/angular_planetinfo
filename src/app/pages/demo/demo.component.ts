import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  imports: [
    CommonModule,
  ],
})
export class DemoComponent {

  @Input() isModalOpen = false;
  selectedProduct:any = null;
  sentences: string[] = [];
  openStates: boolean[] = [];
  specificationKeys:any


    data = [
    {
      id:1,
      title: 'this is item 1',
      imageUrl:"../../../assets/truck.jpg",
      descriptionLong:"Introducing the Bharat 101 Data Sheet Device, the perfect storage solution for any business. This external hard drive is designed to provide users with a reliable and secure way to store and access data. The device has a sleek and stylish design and is compatible with USB interface, making it perfect for office and home use. The device has a large capacity of up to 1TB, so you can store all your important documents, photos, videos, music, and more. It also comes with a warranty, so you can be sure that your data is safe and secure. The Bharat 101 Data Sheet Device is designed to be highly efficient and reliable. It has a fast read/write speed, so you can access your data quickly and easily. The device is also designed to be energy efficient, so you can save money on your electricity bills. The device is also designed to be durable and long-lasting, so you can use it for years without any problems. The Bharat 101 Data Sheet Device is the perfect storage solution for any business. It is designed to provide users with a reliable and secure way to store and access data. It is also designed to be energy efficient and durable, so you can use it for years without any problems.",
      description: 'The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js. Install tailwindcss via npm, and create your tailwind.config.js file.',
      faq: [
        { 
          question: 'What is the warranty period?', 
          answer: 'The device comes with a warranty period of X years.'
        },
        { 
          question: 'Is it compatible with Mac?', 
          answer: 'Yes, the device is compatible with Mac.' 
        },
      ],

      spacification:[
        {
          Price:"200",
          Minimum_Order_Quantity:"",
          Supply_Ability:"",
          Delivery_Time:"",
          Main_Domestic_Market:"All india"
        }
      ]
    },
    {
      id:2,
      title: 'this is item 2',
      imageUrl:"../../../assets/truck.jpg",
      descriptionLong:"Introducing the Bharat 101 Data Sheet Device, the perfect storage solution for any business. This external hard drive is designed to provide users with a reliable and secure way to store and access data. The device has a sleek and stylish design and is compatible with USB interface, making it perfect for office and home use. The device has a large capacity of up to 1TB, so you can store all your important documents, photos, videos, music, and more. It also comes with a warranty, so you can be sure that your data is safe and secure. The Bharat 101 Data Sheet Device is designed to be highly efficient and reliable. It has a fast read/write speed, so you can access your data quickly and easily. The device is also designed to be energy efficient, so you can save money on your electricity bills. The device is also designed to be durable and long-lasting, so you can use it for years without any problems. The Bharat 101 Data Sheet Device is the perfect storage solution for any business. It is designed to provide users with a reliable and secure way to store and access data. It is also designed to be energy efficient and durable, so you can use it for years without any problems.",
      description: 'The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js. Install tailwindcss via npm, and create your tailwind.config.js file.',
      faq: [
        { 
          question: 'What is the warranty period?', 
          answer: 'The device comes with a warranty period of X years.'
        },
        { 
          question: 'Is it compatible with Mac?', 
          answer: 'Yes, the device is compatible with Mac.' 
        },
      ],

      spacification:[
        {
          Price:"this is item 2",
          Minimum_Order_Quantity:"this is item 2",
          Supply_Ability:"this is item 2",
          Delivery_Time:"this is item 2",
          Main_Domestic_Market:"All india"
        }
      ]
    },
    {
      id:3,
      title: 'this is item 3',
      imageUrl:"../../../assets/truck.jpg",
      descriptionLong:"Introducing the Bharat 101 Data Sheet Device, the perfect storage solution for any business. This external hard drive is designed to provide users with a reliable and secure way to store and access data. The device has a sleek and stylish design and is compatible with USB interface, making it perfect for office and home use. The device has a large capacity of up to 1TB, so you can store all your important documents, photos, videos, music, and more. It also comes with a warranty, so you can be sure that your data is safe and secure. The Bharat 101 Data Sheet Device is designed to be highly efficient and reliable. It has a fast read/write speed, so you can access your data quickly and easily. The device is also designed to be energy efficient, so you can save money on your electricity bills. The device is also designed to be durable and long-lasting, so you can use it for years without any problems. The Bharat 101 Data Sheet Device is the perfect storage solution for any business. It is designed to provide users with a reliable and secure way to store and access data. It is also designed to be energy efficient and durable, so you can use it for years without any problems.",
      description: 'The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js. Install tailwindcss via npm, and create your tailwind.config.js file.',
      faq: [
        { 
          question: 'What is the warranty period?', 
          answer: 'The device comes with a warranty period of X years.'
        },
        { 
          question: 'Is it compatible with Mac?', 
          answer: 'Yes, the device is compatible with Mac.' 
        },
      ],

      spacification:[
        {
          Price:"this is item 3",
          Minimum_Order_Quantity:"this is item 3",
          Supply_Ability:"this is item 3",
          Delivery_Time:"this is item 3",
          Main_Domestic_Market:"All india"
        }
      ]
    },
  ];


  selectedItems(id:any) {
    // debugger
    this.selectedProduct = this.data.find(item=> item.id === id)
    this.sentences = this.getSentences();
    this.getKeys(this.selectedProduct.spacification);
    // this.specificationKeys = this.getKeys(this.selectedProduct.spacification);
    console.log(this.specificationKeys)
    this.openModal() 
  }

  //split sentences when come .
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
