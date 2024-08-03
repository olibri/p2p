import { Component, Input } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { MetamaskComponent } from './metamask/metamask.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ThemeComponent,
    MetamaskComponent,
    NgStyle,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() theme: string = 'light'; // приймаємо тему як вхідний параметр

  lightLogo = 'p2p-high-resolution-logo-transparent.png';
  darkLogo = 'p2p-high-resolution-logo-black-transparent.png';

  get logoSrc(): string {
    return this.theme === 'light' ? this.darkLogo : this.lightLogo;
  }
  get toggleTheme(): string {
    return this.theme === 'light' ? 'dark' : 'light';
  }

}
