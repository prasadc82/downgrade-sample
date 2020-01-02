import { Ng2StateDeclaration } from '@uirouter/angular';
import { HelloComponent } from './hello.component';

export const dashboardState:Ng2StateDeclaration  = {
  parent: 'proposal-tool',
  name: 'dashboard',
  url: '/dashboard',
  component: HelloComponent,
  data: {
    requiresAuth: true
  }
};
