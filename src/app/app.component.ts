import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tailwind_planet';
  constructor(private spinner: NgxSpinnerService, private router: Router) {
    this.router.events.subscribe((event)=> {
      if(event instanceof  NavigationStart) {
        this.spinner.show();
      } else if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError){
        this.spinner.hide()
      }
    })
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
