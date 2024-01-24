import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: 'about', icon: 'person' },
    { title: 'Alumni', url: 'alumni', icon: 'school' },
    { title: 'Batch', url: 'batch', icon: 'ribbon' },
    { title: 'Publication', url: 'publication', icon: 'book' },
    { title: 'Membership', url: 'membership', icon: 'cash' },
    { title: 'Company', url: 'company', icon: 'briefcase' },
    { title: 'Award', url: 'award', icon: 'trophy' },
    { title: 'Donate', url: 'donate', icon: 'wallet' },
    { title: 'Feedback', url: 'feedback', icon: 'share' },
    { title: 'Sign out', url: 'sign', icon: 'walk' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public contactDetails = {
    socialMedia: [
      {URL: 'twitter.com', icon:''},
      {URL: 'instragam.com', icon:''},
      {URL: 'facebook.com', icon:''},
      {URL: 'linked.in', icon:''},
    ],
  };
  constructor() {}
}
