import { Component } from '@angular/core';

@Component({
    selector: 'nv_rice-component',
    templateUrl: './nonVeg_rice.component.html',
    styleUrls: ['./app.component.css']
  })

export class Non_Veg_Rice{
  listOfRice = nv_Rice;  
}

const nv_Rice = [
    { name: 'Jeera Rice', price: '110.00', image: "https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/03/jeera-rice-1.jpg" },
    { name: 'Egg Biryani', price: '219.00', image: "http://www.myfridayfoodswings.com/wp-content/uploads/2015/09/biryani3-800x531.jpg"},
    { name: 'Mutton Matka Dum Biryani', price: '359.00', image: "https://i.ytimg.com/vi/ghT3oVPf6oY/maxresdefault.jpg"},
    { name: 'Hyderabadi chicken Dum Biryani', price: '359.00', image: "https://i.ytimg.com/vi/dEZ0oOyGl0I/maxresdefault.jpg"},
    { name: 'Chicken Hakka Noodles', price: '210.00', image: "http://cravecookclick.com/wp-content/uploads/2014/06/IMG_4365-2.jpg"},
    { name: 'Egg Chowmein', price: '189.00', image: "https://cookcookandcook.files.wordpress.com/2013/03/img_2831.jpg"}
]