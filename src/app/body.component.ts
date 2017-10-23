import { Component } from '@angular/core';

@Component({
    selector: 'body-component',
    templateUrl: './body.component.html',
    styleUrls: ['./app.component.css']
  })

export class BodyComponent{
    myContent = 'Our mission is to ensure nobody has a bad meal.';
}
