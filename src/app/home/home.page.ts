import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
// import { CUSTOM_ELEMENTS_SCHEMA,  ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, BannerComponent],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  slides: any[] = [];
  
  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {banner: 'assets/IMG-20240123-WA0003.jpg'},
      {banner: 'assets/IMG-20240123-WA0005.jpg'},
      {banner: 'assets/b2.jpeg'},
      {banner: 'assets/b3.jpeg'},
    ];
  }

}
