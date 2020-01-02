import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule, UIRouter, servicesPlugin} from '@uirouter/angular'
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import { BootstrapComponent } from './bootstrap.component';

// FIX for the HYBRID
// servicesPlugin(null);

import { RouterModule } from '@angular/router';

const dashboardFutureState = {
  name: 'dashboard.**',
  url: '/dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
};

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  entryComponents: [
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    UIRouterUpgradeModule,
    UIRouterModule.forChild({states: [dashboardFutureState]}),
    RouterModule.forRoot([])
  ]
})
export class AppModule {
  constructor(private router: UIRouter) {
    console.log('AppModule');
  }

  ngDoBootstrap() {
  }
}
