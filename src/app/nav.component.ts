import { Component } from '@angular/core';

@Component({
    selector: 'nav-component',
    templateUrl: './nav.component.html',
    styleUrls: ['./app.component.css']
  })

export class NavComponent{
    listofNavigations = navigation;
}

const navigation = [
    { page : 'Home'},
    { page : 'About Us'}
];
