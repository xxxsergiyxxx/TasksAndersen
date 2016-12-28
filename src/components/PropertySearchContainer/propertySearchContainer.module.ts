import * as angular from 'angular';
import { Controller } from './propertySearchContainer.component';

const template = require('./propertySearchContainer.template.html');
export default angular
  .module('propertySearchContainer', [])
  .component('propertySearchContainer', {
    template,
    controller: Controller
  })
  