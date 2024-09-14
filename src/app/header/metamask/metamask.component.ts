import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { ThemeComponent } from '../theme/theme.component';
import { AccounterClient } from 'app/proto/account_pb_service';
import detectEthereumProvider from '@metamask/detect-provider';
import { SignatureRequest, SignatureResponse } from 'app/proto/account_pb';
import {  catchError, delay, from, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  private       ethereum: any;

  @Input() theme: string = 'light'; // приймаємо тему як вхідний параметр
  private client: AccounterClient;
  // private apiUrl = 'https://localhost:42004/v1/web3Auth';
  constructor(@Inject(PLATFORM_ID) private platformId: Object, 
  private http: HttpClient) {

    this.client = new AccounterClient('https://localhost:42004'); // Ensure you have the correct URL

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
    const req = new SignatureRequest();
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
          
          req.setMessage(message);
          req.setAccount(account);
          req.setSignature(signature);
          console.log({signature}, {account})
          

          new Promise((resolve, reject) => 
          {
            this.client.verifySignature(req, (err, response) => 
            {
              if (err)
              {
                console.error('gRPC Error:', err.message);
                reject(err);
              }
              else 
              {
                console.log('gRPC Response:', response?.getToken());
                if (response && response.getToken()) {
                  localStorage.setItem('userToken', response.getToken());
                  resolve(response);
                }
              }
            });
          });
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
