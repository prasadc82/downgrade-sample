import * as angular from 'angular';
import configModule from './config.module';
import proposalToolModule from './components/proposal-tool/proposal-tool.module';
import utilities from 'media-ui-utilities';
import component from './root.component';

export const rootModule = angular.module('root', [
  'ui.router.upgrade',
  configModule,
  proposalToolModule,
  utilities
]);

rootModule.component('root', component);

rootModule.config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/proposal-tool');
}]);

rootModule.run(['$trace', ($trace) => {
  $trace.enable(1);
}]);
