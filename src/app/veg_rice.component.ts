import { Component } from '@angular/core';

@Component({
    selector: 'rice-component',
    templateUrl: './veg_rice.component.html',
    styleUrls: ['./app.component.css']
  })

export class Veg_RiceComponent{
  typesOfRice = Rice;
}

const Rice = [
  { name: 'Jeera Rice', price: '110.00', image: "https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/03/jeera-rice-1.jpg" },
  { name: 'Veg Biryani', price: '214.00', image: "http://www.flavorquotient.com/wp-content/uploads/2016/10/Vegetable-Biryani-FQ-2-1-of-1.jpg"},
  { name: 'Veg Hakka Noodles', price: '349.00', image: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg?fit=750%2C609"},
  { name: 'Veg Schezwan Rice', price: '449.00', image: "https://i.ytimg.com/vi/OUhyJPJlfS8/maxresdefault.jpg"}
]