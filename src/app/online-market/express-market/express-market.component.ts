import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-express-market',
  standalone: true,
  imports: [
    NgClass

  ],
  templateUrl: './express-market.component.html',
  styleUrl: './express-market.component.css'
})
export class ExpressMarketComponent {
  activeTab: string = 'buy'; // Default active tab
}
