import { Component } from '@angular/core';

@Component({
    selector: 'starters-component',
    templateUrl: './starters.component.html',
    styleUrls: ['./app.component.css']
  })

export class StartersComponent{
  listofstarters = Starters; 
}

const Starters = [
  { name: 'Veg Paneer Tikka', price: '189.00', image: "https://i1.wp.com/files.hungryforever.com/wp-content/uploads/2016/04/03174731/Achari-Paneer-Tikka-1.jpg?fit=929%2C622" },
  { name: 'Veg Hara Bhara Kabab', price: '314.00', image: "https://hindi.boldsky.com/img/2012/02/14-kabab.jpg"},
  { name: 'Chinese Bhel', price: '240.00', image: "https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Dhara_Shah_/Chinese_bhel__No_onion_No_garlic.jpg"},
  { name: 'Veg Baby Corn Manchurian', price: '290.00', image: "http://redchillycurry.com/wp-content/uploads/2012/05/bc-manchurian2.jpg"},
  { name: 'Veg Spring Roll', price: '229.00', image: "https://i.ytimg.com/vi/Ean2MMBEiqk/maxresdefault.jpg"},
  { name: 'Crispy Veg', price: '314.00', image: "http://www.makhansfish.com/images/banner-imgae8.jpg"}
]