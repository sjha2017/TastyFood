import { Component } from '@angular/core';

@Component({
    selector: 'ice_cream-component',
    templateUrl: './ice_cream.component.html',
    styleUrls: ['./app.component.css']
  })

export class Ice_CreamComponent{
  listOfIcecream = Ice_cream;  
}

const Ice_cream = [
  { name: 'Chocolate Brownie with Vanilla Ice Cream', price: '190.00', image: "http://www.lovethispic.com/uploaded_images/41337-Hot-Fudge-Brownie-With-Ice-Cream.png" },
  { name: 'Kesar Pista Kulfi', price: '120.00', image: "https://i.ytimg.com/vi/LAfHTsBWbEU/maxresdefault.jpg"},
  { name: 'Butter Scotch', price: '76.00', image: "http://cookingshooking.com/wp-content/uploads/2014/03/bsicir.jpg"},
  { name: 'Rose Falooda', price: '152.00', image: "https://www.tarladalal.com/members/9306/big/big_rose_falooda-4250.jpg?size=500X660"},
]