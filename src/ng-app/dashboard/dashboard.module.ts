import {NgModule} from '@angular/core';
import {dashboardState} from './dashboard.states';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UIRouterModule} from '@uirouter/angular';
import {HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild({
      states: [dashboardState]
    })
  ]
})

class DashboardModule {
  constructor() {
    console.log('DashboardModule');
  }
}

export {DashboardModule}
