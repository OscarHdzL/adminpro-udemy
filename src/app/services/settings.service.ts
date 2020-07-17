import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private LinkTheme = document.querySelector('#theme');

  constructor() {
    
    const url = localStorage.getItem('theme') || 'assets/css/colors/default-dark.css';
    this.LinkTheme.setAttribute('href',url);
    
   }

   changeTheme(tema: string){
    
    const url = `assets/css/colors/${tema}.css`;
    this.LinkTheme.setAttribute('href',url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    links.forEach(
      (elem) => {
        elem.classList.remove('working');
        const btnTheme = elem.getAttribute('data-theme');
        const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
        const currentTheme = this.LinkTheme.getAttribute('href');
        if(btnThemeUrl === currentTheme)
        elem.classList.add('working')

      }

    );

  }
}
