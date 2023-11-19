import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit, OnDestroy {
  logos: { url: string }[] = [
    { url: '../../../assets/companyLogos/_com1 (1).jpeg' },
    { url: '../../../assets/companyLogos/_com1 (1).jpeg' },
    { url: '../../../assets/companyLogos/_com2.jpeg' },
    { url: '../../../assets/companyLogos/_com2.jpeg' },
    // Add more logo objects as needed
  ];

  currentSlide = 0;
  autoRotateInterval: any | null = null;
  imageDisplayDuration = 20000; // 3 seconds

  ngOnInit() {
    this.autoRotate();
  }

  ngOnDestroy() {
    this.clearAutoRotate();
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.logos.length) % this.logos.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.logos.length;
  }

  autoRotate() {
    this.autoRotateInterval = setInterval(() => {
      this.nextSlide();
    }, this.imageDisplayDuration);
  }

  clearAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }
}
