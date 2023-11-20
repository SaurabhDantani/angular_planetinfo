import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent {
  @Input() isModalOpen = false;
  selectedProduct:any = null;
  sentences: string[] = [];
  openStates: boolean[] = [];
  specificationKeys:any

  data = [
    {
      id:1,
      title: 'DAHUA HD 2MP Color Bullet Camera',
      imageUrl:"../../../assets/cameraImages/DAHUAHD2MPColorBullet.png",
      descriptionLong:"Introducing the DAHUA HD 2MP Color Bullet Camera, a powerful and reliable security camera system designed to provide superior image quality and reliable performance. This camera is equipped with a 2MP color sensor that delivers clear, detailed images even in low light conditions. The camera is also weatherproof, allowing it to be used in any outdoor environment. The camera is powered by electricity, making it easy to install and maintain. It also features a high screen resolution, making it capable of capturing detailed images. The camera is made of durable plastic, ensuring it will last for years to come. The DAHUA HD 2MP Color Bullet Camera is the perfect security solution for any business or home. With its superior image quality and reliable performance, it is sure to provide the peace of mind you need.",
      description: 'Introducing the DAHUA HD 2MP Color Bullet Camera, a powerful and reliable security camera system designed to provide superior image quality and reliable performance. This camera is equipped with a 2MP color sensor that delivers clear, detailed images even in low light conditions. ',

      spacification:[
        {
          "Price":"3350 INR/Unit",
          "Minimum Order Quantity":"10 Piece",
          "Supply Ability":"100 Piece Per Month",
          "Delivery Time":" 10 Days",
          Material:"Plastic",
          "Special Features":"Weather Proof",
          "Power Supply":"Electricity",
          Resolution:"High",
          "Camera Type":"Digital Camera",
        }
      ],
      faq: [
        { 
          question: 'What type of camera is the DAHUA HD 2MP Color Bullet Camera?', 
          answer: ' The DAHUA HD 2MP Color Bullet Camera is a digital camera.'
        },
        { 
          question: 'Does the camera require a power supply?', 
          answer: 'Yes, the camera requires electricity to operate.' 
        },
        { 
          question: ' Is the camera weatherproof?', 
          answer: 'Yes, the DAHUA HD 2MP Color Bullet Camera is weatherproof, allowing it to be used in any outdoor environment'
        },
        { 
          question: 'What material is the camera made of?', 
          answer: 'The DAHUA HD 2MP Color Bullet Camera is made of durable plastic.' 
        },
        { 
          question: 'What type of businesses can benefit from this camera?', 
          answer: 'The DAHUA HD 2MP Color Bullet Camera is suitable for any business or home that requires reliable security solutions. It can be used by service providers, suppliers, and traders.' 
        },
      ],
    },
    {
      id:2,
      title: 'DAHUA HD 2MP Color Dome Camera',
      imageUrl:"../../../assets/cameraImages/DAHUAHD2MPColorDome.png",
      descriptionLong:"The DAHUA HD 2MP Color Dome Camera is a high-resolution digital camera that is perfect for any security or surveillance application. This camera is designed to be weather-proof, making it suitable for both indoor and outdoor use. The camera features a 2MP sensor and a 3.6mm lens that provides a wide field of view, allowing you to capture all the details of your scene. The camera is powered by electricity and is made of durable plastic, making it a reliable and long-lasting security solution. The DAHUA HD 2MP Color Dome Camera is an ideal choice for any security or surveillance application. It features a high-resolution sensor that captures clear and detailed images, even in low light conditions. The 3.6mm lens provides a wide field of view, allowing you to capture more of your scene. The camera is weather-proof and made of durable plastic, making it a reliable security solution for both indoor and outdoor use.",
      description: 'The DAHUA HD 2MP Color Dome Camera is a high-resolution digital camera that is perfect for any security or surveillance application. This camera is designed to be weather-proof, making it suitable for both indoor and outdoor use.',

      spacification:[
        {
          "Price":"3350 INR/Unit",
          "Minimum Order Quantity":"10 Piece",
          "Supply Ability":"100 Piece Per Month",
          "Delivery Time":" 10 Days",
          Material:"Plastic",
          "Special Features":"Weather Proof",
          "Power Supply":"Electricity",
          Resolution:"High",
          "Camera Type":"Digital Camera",
        }
      ],

      faq: [
        { 
          question: 'What type of camera is the DAHUA HD 2MP Color Dome Camera?', 
          answer: 'The DAHUA HD 2MP Color Dome Camera is a digital camera.'
        },
        { 
          question: 'What is the resolution of the camera?', 
          answer: 'The camera has a 2MP sensor and a 3.6mm lens, providing a high resolution image.' 
        },
        { 
          question: 'How is the camera powered?',
          answer: 'The DAHUA HD 2MP Color Dome Camera is powered by electricity.'
        },
        { 
          question: 'Is the camera weather-proof?',
          answer: 'Yes, the camera is designed to be weather-proof, making it suitable for both indoor and outdoor use.'
        },
      ],
    },
    {
      id:3,
      title: 'DAHUA IP Camera Bullet 4MP',
      imageUrl:"../../../assets/cameraImages/DAHUAIPCameraBullet4MP.png",
      descriptionLong:"Introducing the DAHUA IP Camera Bullet 4MP the perfect solution for your surveillance needs. This high-quality camera is designed to provide you with the most reliable and efficient surveillance experience. It features a 4MP resolution, a weatherproof design, and a digital camera for capturing clear images. With its advanced features, this camera is sure to meet your surveillance needs. The DAHUA IP Camera Bullet 4MP is made from durable plastic and can withstand harsh weather conditions. It is equipped with a high-resolution screen for capturing clear images. The camera also features a digital camera for capturing clear images, even in low light conditions. Its weatherproof design ensures that you can use it in any environment, no matter the weather. In addition, the DAHUA IP Camera Bullet 4MP is easy to install and operate. It comes with a power supply, so you dont have to worry about wiring or running cables. You can also connect it to your computer or smartphone for remote monitoring. With its advanced features, you can be sure that youll get the most reliable and efficient surveillance experience. The DAHUA IP Camera Bullet 4MP is the perfect solution for your surveillance needs. With its high-quality design and advanced features, you can be sure that you ll get the most reliable and efficient surveillance experience.",
      description: 'Introducing the DAHUA IP Camera Bullet 4MP the perfect solution for your surveillance needs. This high-quality camera is designed to provide you with the most reliable and efficient surveillance experience.',

      spacification:[
        {
          "Price":"3350 INR/Unit",
          "Minimum Order Quantity":"10 Piece",
          "Supply Ability":"100 Piece Per Month",
          "Delivery Time":" 10 Days",
          Material:"Plastic",
          "Special Features":"Weather Proof",
          "Power Supply":"Electricity",
          Resolution:"High",
          "Camera Type":"Digital Camera",
        }
      ],
      faq: [
        { 
          question: 'What is the power supply of the DAHUA IP Camera Bullet 4MP?', 
          answer: 'The DAHUA IP Camera Bullet 4MP is powered by electricity.'
        },
        { 
          question: 'What is the resolution of the camera?',
          answer: 'The DAHUA IP Camera Bullet features a 4MP resolution.' 
        },
        { 
          question: 'Is the DAHUA IP Camera Bullet 4MP weatherproof?',
          answer: 'Yes, the DAHUA IP Camera Bullet 4MP is designed to be weatherproof.'
        },
        { 
          question: 'Does the DAHUA IP Camera Bullet 4MP come with a power supply?',
          answer: 'Yes, the DAHUA IP Camera Bullet 4MP comes with a power supply.'
        },
        { 
          question: 'Can I connect the DAHUA IP Camera Bullet 4MP to my computer or smartphone?',
          answer: 'Yes, you can connect the DAHUA IP Camera Bullet 4MP to your computer or smartphone for remote monitoring.'
        },
      ],
    },
    {
      id:4,
      title: 'DAHUA IP Camera Dome 2MP',
      imageUrl:"../../../assets/cameraImages/DAHUAIPCameraDome2MP.jpg",
      descriptionLong:"DAHUA IP Camera Dome 2MP is a top-of-the-line security camera that is perfect for both indoor and outdoor use. This camera features a high-resolution 2 megapixel screen that captures clear, crisp images in any lighting condition. It also has a weatherproof design that ensures it will remain safe from the elements. The camera is made from durable plastic and is powered by electricity. This camera is perfect for any business that needs to provide reliable security surveillance. The DAHUA IP Camera Dome 2MP is an excellent choice for any business that needs to monitor their premises. This camera is easy to install and provides a clear, wide angle view of your property. It also has night vision capabilities and motion detection technology that will alert you when someone is on your property. This camera is perfect for any business that needs to keep their premises safe and secure.",
      description: 'DAHUA IP Camera Dome 2MP is a top-of-the-line security camera that is perfect for both indoor and outdoor use. This camera features a high-resolution 2 megapixel screen that captures clear, ',

      spacification:[
        {
          "Price":"3350 INR/Unit",
          "Minimum Order Quantity":"10 Piece",
          "Supply Ability":"100 Piece Per Month",
          "Delivery Time":" 10 Days",
          Material:"Plastic",
          "Special Features":"Weather Proof",
          "Power Supply":"Electricity",
          Resolution:"High",
          "Camera Type":"Digital Camera",
        }
      ],
      faq: [
        { 
          question: 'What is the resolution of the DAHUA IP Camera Dome 2MP?', 
          answer: 'The DAHUA IP Camera Dome has a high-resolution 2 megapixel screen.'
        },
        { 
          question: 'Is the DAHUA IP Camera Dome 2MP weatherproof?',
          answer: 'Yes, the DAHUA IP Camera Dome 2MP has a weatherproof design that will protect it from the elements.' 
        },
        { 
          question: 'What type of power supply does the DAHUA IP Camera Dome 2MP use?',
          answer: 'The DAHUA IP Camera Dome 2MP is powered by electricity.'
        },
        { 
          question: 'Does the DAHUA IP Camera Dome 2MP have night vision capabilities?',
          answer: 'Yes, the DAHUA IP Camera Dome 2MP has night vision capabilities.'
        },
        { 
          question: 'Does the DAHUA IP Camera Dome 2MP have motion detection technology?',
          answer: 'Yes, the DAHUA IP Camera Dome 2MP has motion detection technology that will alert you when someone is on your property.'
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
