import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';

const propertySearchContainer = require('../../components/PropertySearchContainer/propertySearchContainer.template.html');

class Provider {
  private static $inject: string[] = ['$stateProvider', '$urlRouterProvider'];
  constructor(stateProvider: uiRouter.IStateProvider, urlRouterProvider: uiRouter.IUrlRouterProvider) {
    const states =
    [
       {
          name: '/',
          url: '/',
          template: propertySearchContainer
       }
    ]

    states.forEach(state => {
      stateProvider.state(state);
    });
    urlRouterProvider.otherwise('/');
  }

}
export default Provider;