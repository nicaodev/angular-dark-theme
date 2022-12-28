import { Component } from '@angular/core';
import { ETheme } from './enums/eTheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon: string = ETheme.ICON_MOON;

  public toggle() {

    const theme = document.body.classList.toggle('dark-theme');

    if (theme) return this.icon = ETheme.ICON_SUN;

    return this.icon = ETheme.ICON_MOON;
  }

}
