import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: 'login',icon:"log-in-outline"},
    { title: 'thank-you', url: 'thank-you',icon:"megaphone-outline"},
    { title: 'history', url: 'history',icon:"document-outline"},
    { title: 'survay-list', url: 'survay-list',icon:"list-outline"},
    { title: 'personal-detail', url: 'personal-detail',icon:"person-outline"},
    { title: 'survay-detail', url: 'survay-detail',icon:"people-outline"},
    { title:'Logout', url: 'Logout',icon:"log-out-outline"},
   
  ];
  constructor() {}
}
