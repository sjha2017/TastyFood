import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SideBarComponent } from './sidebar.component';
import { BodyComponent } from './body.component';
import { NavComponent } from './nav.component';
import { RouterModule, Routes } from '@angular/router';
import { SoupsSaladsComponent } from './soups&salads.component';
import { StartersComponent } from './starters.component';
import { Veg_MainCourseComponent } from './veg_maincourse.component';
import { BreadComponent } from './bread.component';
import { Veg_RiceComponent } from './veg_rice.component';
import { Non_Veg_Soups } from './nonVeg_soups.component';
import { Non_Veg_Starters } from './nonVeg_Starters.component';
import { Non_Veg_MainCourse } from './nonVeg_MainCourse.component';
import { Non_Veg_Rice } from './nonVeg_Rice.component';
import { Coffee } from './coffee.component';
import { Ice_CreamComponent } from './ice_cream.component';

const appRoutes: Routes = [
  
    { path: 'soupsAndSalad', component: SoupsSaladsComponent },
    { path: 'veg_starters', component: StartersComponent },
    { path: 'veg_maincourse', component: Veg_MainCourseComponent },
    { path: 'roti', component: BreadComponent },
    { path: 'rice', component: Veg_RiceComponent },
    { path: 'home', component: BodyComponent },
    { path: 'nv_soupsAndSalad', component: Non_Veg_Soups },
    { path: 'nv_starters', component: Non_Veg_Starters },
    { path: 'nv_maincourse', component: Non_Veg_MainCourse },
    { path: 'nv_rice', component: Non_Veg_Rice },
    { path: 'coffee', component: Coffee},
    { path: 'ice_cream', component: Ice_CreamComponent },
    { path: '**', component: BodyComponent }

  ];

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, FooterComponent, NavComponent, SideBarComponent, BodyComponent, 
    SoupsSaladsComponent, StartersComponent, Veg_MainCourseComponent, BreadComponent,
    Veg_RiceComponent, Non_Veg_Soups, Non_Veg_Starters, Non_Veg_MainCourse, Non_Veg_Rice,
    Coffee, Ice_CreamComponent
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
