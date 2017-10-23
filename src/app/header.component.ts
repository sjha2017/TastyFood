import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./app.component.css']
  })

export class HeaderComponent{
  listofLanguage = lang;
}

const lang = [
  { language : 'English' },
  { language : 'Hindi' },
  { language : 'Marathi' },
  { language : 'Punjabi' },
  { language : 'Bengali' },
  { language : 'Gujrati' }
]