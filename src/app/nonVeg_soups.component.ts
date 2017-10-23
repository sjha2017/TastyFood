import { Component } from '@angular/core';

@Component({
    selector: 'nv_soups-component',
    templateUrl: './nonVeg_soups.component.html',
    styleUrls: ['./app.component.css']
  })

export class Non_Veg_Soups{
  listofSoups = Soups;  
}

const Soups = [
  { name: 'Chicken Manchow Soup', price: '139.00', image: "http://www.krreddy.com/wp-content/uploads/2017/08/chicken-manchow-soup-recipe.jpg" },
  { name: 'Chicken Hot & Sour Soup', price: '129.00', image: "http://www.neelscorner.com/wp-content/uploads/2009/08/hotandsoursoup_thumb.jpg"},
  { name: 'Prawns Talumein Soup', price: '140.00', image: "http://im.hunt.in/local/Gallery/499720/l/499720_9c2bd.jpg"},
  { name: 'Mutton Pho Chiru Soup', price: '200.00', image: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/zqubqmi3efcucnnemto9"},
  { name: 'Chicken Mince Salad', price: '270.00', image: "https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1273669_8.jpg"},
  { name: 'Prawns Russian Salad', price: '319.00', image: "https://www.boldsky.com/img/2015/07/x23-1437631800-shutterstock-166735733.jpg.pagespeed.ic.AiF3sxSCa0.jpg"},
  { name: 'Chicken Caesar Salad', price: '259.00', image: "http://www.cbc.ca/food/content/images/recipes/The_Ultimate_Caesar_Salad_-thumb-960x541-274971.jpg"},
  { name: 'Curried Egg Salad', price: '259.00', image: "https://www.scatteredthoughtsofacraftymom.com/wp-content/uploads/2014/08/curried-egg-salad-1.jpg"}
]