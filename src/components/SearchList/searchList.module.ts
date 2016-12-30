import * as angular from 'angular';
import Controller from './searchList.component';
import SearchListService from  './searchList.service'
const template = require('./searchList.template.html');

export default angular
  .module('searchList', [])
  .service('searchListService', ['$http', SearchListService])
  .component('searchList', {
    controller: ['searchListService', Controller],
    template,
    bindings: {
    	places: '<',
      place: '@',
      totalPages: '@'
    }
  })