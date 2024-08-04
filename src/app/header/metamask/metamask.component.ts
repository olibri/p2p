import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { ThemeComponent } from '../theme/theme.component';
declare global {
  interface Window {
      ethereum: any;
  }
}
@Component({
  selector: 'app-metamask',
  standalone: true,
  imports: [
    ThemeComponent,
    NgClass
  ],
  templateUrl: './metamask.component.html',
  styleUrl: './metamask.component.css'
})
export class MetamaskComponent implements OnInit {
  
  @Input() theme: string = 'light'; // приймаємо тему як вхідний параметр
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // get currentTheme(): string {
  //   return this.theme;
  // }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      } else {
        console.log('MetaMask is not installed!');
      }
    }
  }

  async signInWithMetaMask() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        const message = "Please sign this message to authenticate yourself.";
        const signature = await window.ethereum.request({
          method: 'personal_sign',
          params: [message, account]
        });
        console.log(`Signed message: ${signature}`);
      } catch (error) {
        console.error('Error signing in with MetaMask', error);
      }
    }
  }
}
