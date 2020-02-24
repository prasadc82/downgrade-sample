import * as angular from 'angular';
import proposalToolModule from './components/proposal-tool/proposal-tool.module';

import rootComponent from './root.component';

const AUTHENTICATED_URL_STRING = 'authenticated-url=http://localhost:4040/proposal-tool';
const SUCCESS_URL_STRING = 'success-url=http://localhost:4040/proposal-tool';
const GUP_URL = `https://login-stage.gcion.com/LIQ-GUP-GRADER/authenticate/?${AUTHENTICATED_URL_STRING}&${SUCCESS_URL_STRING}`;

export const rootModule = angular.module('root', [
  'ui.router.upgrade',
  proposalToolModule
]);

rootModule.component('root', rootComponent);

rootModule.config(['$urlRouterProvider', '$locationProvider', ($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise(function () {
    window.open(
      GUP_URL,
      '_self'
    );
 });
}]);

rootModule.run(['$trace', '$uiRouter', ($trace) => {
  $trace.enable(1);
}]);
