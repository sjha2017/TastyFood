import { Component } from '@angular/core';
import { SoupsSaladsComponent } from './soups&salads.component';


@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./app.component.css']
  })

export class SideBarComponent{
    listofOptions = option;
    listofnon_veg = option_nonVeg;
    listofDesserts = dessert;
    listofDineouts = dineout;
    listofLocations = location;
}

const option = [
    { menu : 'Soups & Salads', href : "soupsAndSalad" },
    { menu : 'Starters', href : "veg_starters" },
    { menu : 'Main Course', href : "veg_maincourse" },
    { menu : 'Indian Bread', href : "roti" },
    { menu : 'Rice & Noodles', href : "rice" }
];

const option_nonVeg = [
    { menu : 'Soups & Salads', href : "nv_soupsAndSalad" },
    { menu : 'Starters', href : "nv_starters" },
    { menu : 'Main Course', href : "nv_maincourse" },
    { menu : 'Indian Bread', href : "roti" },
    { menu : 'Rice & Noodles', href : "nv_rice" }
];

const dessert = [
    { menu : 'Coffee', href : "coffee" },
    { menu : 'Ice Cream', href : "ice_cream" },
    { menu : 'Yoghurt', href : "yoghurt" },
    { menu : 'Halwa', href : "halwa" },
    { menu : 'Juice', href : "juice" }
];

const dineout = [
    { dine : 'Book a table' },
    { dine : 'Drinks & Nightlife' },
    { dine : 'Cafes' },
    { dine : 'Bars' },
    { dine : 'Pubs' },
];

const location = [
    { city : 'Pune' },
    { city : 'Mumbai' },
    { city : 'Delhi' },
    { city : 'Kolkata' },
    { city : 'Ahemdabad' }
]