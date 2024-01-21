import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  openWhatsApp(){    
    const api = "https://wa.me/919974591860?"
    window.location.href =api
  }
}
