import component from './proposal-tool.component';

export default angular.module('proposalTool', [
  'ui.router.upgrade'
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
