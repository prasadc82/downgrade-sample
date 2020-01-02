import template from './proposal-tool.component.html';

const me = 'ProposalToolCtrl';

class ProposalToolCtrl {
  constructor($state) {
    'ngInject';

    this.state = $state;
  }

  $onInit() {
    console.log('$onInit', {}, me);
  }
}

export default {
  template,
  controller: ProposalToolCtrl
};
