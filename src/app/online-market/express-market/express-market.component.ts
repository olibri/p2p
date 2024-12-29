import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-express-market',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    CommonModule
  ],
  templateUrl: './express-market.component.html',
  styleUrl: './express-market.component.css'
})
export class ExpressMarketComponent {
  activeTab: string = 'buy'; // Default active tab

  isDropdownOpen = false;
  selectedCurrency: string ='USD';
  currencies = ['UAH', 'USD', 'CHF', 'GBP'];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.isDropdownOpen = false;
  }

  chips = [50, 100, 500, 1000, 2000];
  amount: number | null = null;

  onChipClick(value: number) {
    this.amount = value;
  }
}
