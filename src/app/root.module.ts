import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {upgradeModule} from '@uirouter/angular-hybrid';

import component from './root.component';
import proposalToolModule from './components/proposal-tool/proposal-tool.module';

// import utilities from 'media-ui-utilities';

export const rootModule = angular.module('root', [
  uiRouter,
  upgradeModule.name,
  proposalToolModule,
  // utilities
]);

rootModule.component('root', component);

rootModule.config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/proposal-tool');
}]);

rootModule.run(['$trace', ($trace) => {
  $trace.enable(1);
}]);
