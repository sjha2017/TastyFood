import { Component } from '@angular/core';

@Component({
    selector: 'nv_mainCourse-component',
    templateUrl: './nonVeg_MainCourse.component.html',
    styleUrls: ['./app.component.css']
  })

export class Non_Veg_MainCourse{
  listofDishes = Dishes;  
}

const Dishes = [
  { name: 'Murg Makkhanwala', price: '269.00', image: "https://www.ndtv.com/cooks/images/chicken.butter.masala%20%281%29.jpg" },
  { name: 'Murg Tikka Masala', price: '269.00', image: "http://assets.kraftfoods.com/recipe_images/opendeploy/173356_640x428.jpg"},
  { name: 'Mutton Rogan Josh', price: '349.00', image: "http://zuranazrecipe.com/wp-content/uploads/2016/07/Mutton-Rogan-Joshhh.jpg"},
  { name: 'Malwani Fish Curry', price: '359.00', image: "http://cravecookclick.com/wp-content/uploads/2012/07/fb3.jpg"}
]