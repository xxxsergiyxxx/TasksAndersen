import * as angular from 'angular';
import Controller from './formSearch.component';
import FormSearchService from './formSearch.service';

const template = require('./formSearch.template.html');
export default angular.module('formSearch', [
  ])
  .service('formSearchService', ['$q', '$http', FormSearchService])
  .component('formSearch', {
    controller:['formSearchService', Controller],
    template
  }).config(($sceDelegateProvider)=>{
    $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://api.nestoria.co.uk/**'
  ]);
});