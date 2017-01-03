import * as angular from 'angular';
import Comtroller from './searchListContainer.component';
import SearchList from '../SearchList/searchList.module';
import SearchListContainerService from './searchListContainer.service';

const template = require('./searchListContainer.template.html');

export default angular
  .module('searchListContainer', [
  SearchList.name
]).service('searchListContainerService', ['$http', SearchListContainerService])
  .component('searchListContainer', {
    template,
    controller: ['searchListContainerService', Comtroller],
    bindings: {
      formSearchService: '<'
    }
})