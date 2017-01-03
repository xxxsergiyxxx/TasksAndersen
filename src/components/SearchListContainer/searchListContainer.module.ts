import * as angular from 'angular';
import Comtroller from './searchListContainer.component';

const template = require('./searchListContainer.template.html');

export default angular.module('searchListContainer', [
  ]).component('searchListContainer', {
      template,
      controller: Comtroller
  })