import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';
class Provider{
  static $inject = ['$stateProvider', '$urlRouterProvider'];
  constructor(stateProvider: uiRouter.StateProvider, urlRouterProvider: uiRouter.UrlRouterProvider) {
    const states=
    [
      {
        name: 'person',
        url: '/person',
        component: 'personTasks'
      }
    ]

   states.forEach(state => {
      stateProvider.state(state);
   });
   urlRouterProvider.otherwise('/workers');
  }

}
export default Provider;