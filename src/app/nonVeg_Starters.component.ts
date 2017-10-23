import { Component } from '@angular/core';

@Component({
    selector: 'nv_starters-component',
    templateUrl: './nonVeg_Starters.component.html',
    styleUrls: ['./app.component.css']
  })

export class Non_Veg_Starters{
  listofStarters = Starters;  
}

const Starters = [
  { name: 'Korean chicken', price: '279.00', image: "http://www.seriouseats.com/sponsored/images/2015/08/Korean-Fried-Chicken.jpg" },
  { name: 'Lahori seekh kabab', price: '269.00', image: "http://www.cookingmela.com/wp-content/uploads/2009/07/seekh-kabab.jpg"},
  { name: 'Mutton Ki Boti', price: '419.00', image: "https://i.ytimg.com/vi/p0N294QQQRI/maxresdefault.jpg"},
  { name: 'Bhatti ki Macchli', price: '200.00', image: "http://recipes.timesofindia.com/photo/54669275.cms"},
  { name: 'Chicken Burritos', price: '319.00', image: "https://images-gmi-pmc.edge-generalmills.com/223f8ca8-a500-4555-8be2-4067f70825a7.jpg"},
  { name: 'Grilled lamb mushroom Sauce', price: '429.00', image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/53/63/22/grilled-lamb-served-over.jpg"},
]