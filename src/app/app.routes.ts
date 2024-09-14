import { Routes } from '@angular/router';
import { OnlineMarketComponent } from './online-market/online-market.component';
import { ExpressMarketComponent } from './online-market/express-market/express-market.component';
import { P2PMarkerComponent } from './online-market/p2-pmarker/p2-pmarker.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    {path: 'online-market', component: OnlineMarketComponent,
        children:[
            {path: 'express', component: ExpressMarketComponent},
            {path: 'p2p', component: P2PMarkerComponent}
        ]
    },
];

