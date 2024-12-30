import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {  RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { OnlineMarketComponent } from './online-market/online-market.component';
@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MatButtonModule,
        HeaderComponent,
        CommonModule,
        OnlineMarketComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p2p';
}
