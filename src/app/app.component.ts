import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
 // standalone: true,
 // imports: [IonicModule],
})
export class AppComponent {
  public pages: any[] = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    {title: 'About Us', url: '/about', icon: 'information-circle'},
    {title: 'Privacy Policy', url: '/privacy', icon: 'document-lock'},
    {title: 'Awards', url: '/awards', icon: 'star'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];

  constructor() {}
}
