import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { ThemeComponent } from '../theme/theme.component';
import detectEthereumProvider from '@metamask/detect-provider';
import { HttpClient } from '@angular/common/http';
declare global {
  interface Window {
      ethereum: any;
  }
}
@Component({
    selector: 'app-metamask',
    imports: [
        ThemeComponent,
        NgClass
    ],
    templateUrl: './metamask.component.html',
    styleUrl: './metamask.component.css'
})
export class MetamaskComponent implements OnInit {
  private       ethereum: any;

  @Input() theme: string = 'light'; // приймаємо тему як вхідний параметр
  constructor(@Inject(PLATFORM_ID) private platformId: Object, 
  private http: HttpClient) {


  }

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


  public async signInWithMetaMask() 
  {
    const provider = await detectEthereumProvider();
    if (provider) {
      console.log('Ethereum provider detected.');
      this.ethereum = provider;
    } 
    else {
      console.error('Please install MetaMask!');
    }
      if (window.ethereum) {
        try {
          
          const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          const message = "message";
          const signature =   await window.ethereum.request({
            method: 'personal_sign',
            params: [message, account]
          });
          
          // req.setMessage(message);
          // req.setAccount(account);
          // req.setSignature(signature);
          console.log({signature}, {account})
          

          // new Promise((resolve, reject) => 
          // {
          //   this.client.verifySignature(req, (err, response) => 
          //   {
          //     if (err)
          //     {
          //       console.error('gRPC Error:', err.message);
          //       reject(err);
          //     }
          //     else 
          //     {
          //       console.log('gRPC Response:', response?.getToken());
          //       if (response && response.getToken()) {
          //         localStorage.setItem('userToken', response.getToken());
          //         resolve(response);
          //       }
          //     }
          //   });
          // });
          // this.client.verifySignature(req, (err, response) => {
          //   if (err) {
          //     console.error('gRPC Error:', err);
          //   } else {
          //     console.log('gRPC Response:', response?.getToken());
          //       // resolve(response.getToken());  // Вирішення промісу з відповіддю
          //   }
          // });

        // console.log(`Signed message: ${message}\n ${account}\n ${signature}`);
      } catch (error) {
        console.error('Error signing in with MetaMask', error);
      }
    }
  }
}
