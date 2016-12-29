import * as angular from 'angular';
import Controller from './searchList.component';

const template = require('./searchList.template.html');

export default angular
  .module('searchList', [])
  .component('searchList', {
    controller: Controller,
    template,
    bindings: {
    	func:'@'
    }
  })