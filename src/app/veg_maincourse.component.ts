import { Component } from '@angular/core';

@Component({
    selector: 'mainCourse-component',
    templateUrl: './veg_mainCourse.component.html',
    styleUrls: ['./app.component.css']
  })

export class Veg_MainCourseComponent{
  listOfMainCourse = MainCourse;
}

const MainCourse = [
  { name: 'Paneer Makhanwala', price: '450.00', image: "https://i1.wp.com/files.hungryforever.com/wp-content/uploads/2016/03/06175438/feature-image-paneer-butter-masala.jpg?w=1269&strip=all&quality=80" },
  { name: 'BabyCorn Mushroom Masala', price: '299.00', image: "http://www.indobase.com/recipes/rec-images/baby-corn-mushroom-masala.jpg"},
  { name: 'Bhindi Do pyaja', price: '249.00', image: "https://www.desidakaar.com/wp-content/uploads/2016/08/Bhindi-Do-Pyaza-Recipe.jpg"},
  { name: 'Veg patiyala', price: '349.00', image: "https://i.ytimg.com/vi/LcmQxcW6TkM/maxresdefault.jpg"}
]