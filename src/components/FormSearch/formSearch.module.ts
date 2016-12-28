import * as angular from 'angular';
import Controller from './formSearch.component';

const template = require('./formSearch.template.html');

export default angular.module('formSearch', [])
  .component('formSearch', {
    controller:Controller,
    template
  });
  