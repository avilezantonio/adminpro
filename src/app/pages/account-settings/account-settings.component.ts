import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  changeTheme(theme: string, currentLink: any) {
    console.log('Theme', theme);
    const url: string = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.changeSelectedTheme(currentLink);

  }

  changeSelectedTheme(currentLink: any) {
    const links = this._document.getElementsByClassName('selector');

    for (const link of links ) {
      link.classList.remove('working');
    }

    currentLink.classList.add('working');
  }

}
