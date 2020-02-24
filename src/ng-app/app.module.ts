import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule, UIRouter} from '@uirouter/angular'
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import { BootstrapComponent } from './bootstrap.component';

// FIX for the HYBRID
// servicesPlugin(null);

import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { ReactiveFormsModule } from '@angular/forms';

const dashboardFutureState = {
  name: 'dashboard.**',
  url: '/dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
};

@NgModule({
  declarations: [
    BootstrapComponent,
    DemoComponent
  ],
  entryComponents: [
    BootstrapComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UIRouterUpgradeModule,
    UIRouterModule.forChild({states: [dashboardFutureState]})
    // RouterModule.forRoot([])
  ]
})
export class AppModule {
  constructor(private router: UIRouter) {
    console.log('AppModule');
  }

  ngDoBootstrap() {
  }
}
