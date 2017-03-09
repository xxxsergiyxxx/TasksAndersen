import * as angular from 'angular';
import Controller from './searchList.component';
import SearchListService from  './searchList.service'
import './css/style.css';

const template = require('./searchList.template.html');

export default angular
  .module('searchList', [])
  .service('searchListService', SearchListService)
  .component('searchList', {
    controller: ['searchListService', '$state', Controller],
    template,
    bindings: {
      places: '<'
    }
  })