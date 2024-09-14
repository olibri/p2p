import { Injectable } from '@angular/core';
// import { AccounterClient } from '@proto/account_pb_service'; 
// import { SignatureRequest, SignatureResponse } from '@proto/account_pb' 
// import { AccounterClient } from 'app/proto/account_pb_service';
// import { SignatureRequest, SignatureResponse } from 'app/proto/account_pb';
import { SignatureRequest, SignatureResponse } from 'app/proto/account_pb';
import { AccounterClient } from 'app/proto/account_pb_service';

@Injectable({
  providedIn: 'root'
})
export class AccounterService {
  private apiUrl = 'https://localhost:42004'; 

  private client: AccounterClient;
  constructor() {
    this.client = new AccounterClient('https://localhost:42004'); // Ensure you have the correct URL

  }

  verifySignature(message: string, account: string, signature: string): Promise<SignatureResponse> {
    return new Promise((resolve, reject) => {
      const req = new SignatureRequest();
      req.setMessage(message);
      req.setAccount(account);
      req.setSignature(signature);

      this.client.verifySignature(req, (err, response) => {
        if (err) {
          console.error('gRPC Error:', err);
          reject(err);  // Відправка помилки назад
        } else {
          console.log('gRPC Response:', response?.getToken());
            // resolve(response.getToken());  // Вирішення промісу з відповіддю
        }
      });
    });
  }
}
