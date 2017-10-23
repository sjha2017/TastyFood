import { Component } from '@angular/core';

@Component({
    selector: 'coffee-component',
    templateUrl: './coffee.component.html',
    styleUrls: ['./app.component.css']
  })

export class Coffee{
  listOfcoffee = coffee;  
}

const coffee = [
  { name: 'Cafe Latte', price: '140.00', image: "https://s3-us-west-2.amazonaws.com/beachbody-blog/uploads/2017/04/Beachbody-Blog-Pumpkin-Spice-Latte.jpg" },
  { name: 'Cappuchino', price: '119.00', image: "https://www.lactaid.com/sites/lactaid_us/files/recipe-images/cappuccino.jpg"},
  { name: 'Cafe Mocha', price: '169.00', image: "http://agreatcoffee.com/wp-content/uploads/2017/01/Mocha.jpeg"},
  { name: 'White Choco Mocha', price: '190.00', image: "https://www.starbucks.com.au/imagecache/bestfit/750x750/_files/Beverages/White%20Chocolate%20Mocha.jpg"},
  { name: 'Xpresso', price: '100.00', image: "https://i.ytimg.com/vi/I9iG--GapS0/maxresdefault.jpg"},
  { name: 'Hot Chocolate', price: '110.00', image: "http://www.sugardishme.com/wp-content/uploads/2013/01/Bourbon-Spiked-Hot-Chocolate-21.jpg"}
]