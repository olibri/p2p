import { RouterModule, Routes } from '@angular/router';
import { OnlineMarketComponent } from './online-market/online-market.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    {path: 'online-market', component: OnlineMarketComponent}
];

