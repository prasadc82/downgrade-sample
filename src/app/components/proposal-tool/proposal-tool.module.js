import uiRouter from '@uirouter/angularjs';
import component from './proposal-tool.component';

export default angular.module('proposalTool', [
  uiRouter
])
  .component('proposalTool', component)
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('proposal-tool', {
      url: '/proposal-tool',
      component: 'proposalTool'
      // redirectTo: 'dashboard'
    });
  }])
  .name;