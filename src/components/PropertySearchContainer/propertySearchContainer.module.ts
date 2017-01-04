import * as angular from 'angular';
import { Controller } from './propertySearchContainer.component';
import FormSearch  from '../FormSearch/formSearch.module';
import './css/style.css'

const template = require('./propertySearchContainer.template.html');

export default angular
  .module('propertySearchContainer', [
      FormSearch.name
    ])
  .component('propertySearchContainer', {
    template,
    controller: Controller
  })
  