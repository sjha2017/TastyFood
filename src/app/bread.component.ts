import { Component } from '@angular/core';

@Component({
    selector: 'bread-component',
    templateUrl: './bread.component.html',
    styleUrls: ['./app.component.css']
  })

export class BreadComponent{
  typesOfRoti = Roti;
}

const Roti = [
  { name: 'Tawa Roti', price: '15.00', image: "http://foodvala.com/wp-content/uploads/2017/04/Butter-Tawa-Roti-Foodvala.jpg" },
  { name: 'Tandoori Roti', price: '25.00', image: "http://spiceaffairs.in/wp-content/uploads/2017/06/FullSizeRender_1-4-750x544.jpg"},
  { name: 'Garlic Naan', price: '35.00', image: "http://img.werecipes.com/wp/wp-content/uploads/2014/06/garlic-naan-recipe-on-tawa-indian-garlic-naan.jpg"},
  { name: 'Butter kulcha', price: '39.00', image: "http://www.vegrecipesofindia.com/wp-content/uploads/2013/06/kulcha-recipe-12.jpg"}
]