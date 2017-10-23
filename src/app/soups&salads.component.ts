import { Component } from '@angular/core';

@Component({
    selector: 'sands-component',
    templateUrl: './soups&salads.component.html',
    styleUrls: ['./app.component.css']
  })

export class SoupsSaladsComponent{
  listofmenu = Menu;  
}

const Menu = [
  { name: 'Potato Salad', price: '255.00', image: "./assets/images/potaosalad.jpeg" },
  { name: 'Veg Caesar Salad', price: '219.00', image: "./assets/images/caesarsalad.jpg"},
  { name: 'Veg Hot & Sour Soup', price: '149.00', image: "./assets/images/h&s.jpg"},
  { name: 'Cream of Tomato Soup', price: '119.00', image: "./assets/images/tomatosoup.jpg"}
]
