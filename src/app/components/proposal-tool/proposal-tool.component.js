import template from './proposal-tool.component.html';

const me = 'ProposalToolCtrl';

class ProposalToolCtrl {

  constructor($location) {
    'ngInject';

    this.location = $location;
    this.name_1 = {
      firstName: 'Prasad',
      lastName: 'C'
    };
  
    this.name_2 = {
      firstName: 'Prasad',
      lastName: 'Chandrashekar'
    };

    this.data = 'Some';
  }

  $onInit() {
    this.data = JSON.stringify(this.location.search(), undefined, 2);

    console.log('$onInit', {
      me,
      location: this.location.search(),
    });
  }

  update(value) {
    this.name_1 = JSON.parse(JSON.stringify(value));
    console.log('ProposalToolCtrl:update', value);
  }
}

export default {
  template,
  controller: ProposalToolCtrl
};
