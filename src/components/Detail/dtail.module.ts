import * as angular from 'angular';
import Controller from './detail.component';
import './css/style.css';

const template = require('./detail.template.html');

export default angular
  .module('detail', [])
  .component('detail', {
    controller: Controller,
    template,
    bindings: {
      detail: '<'
    }
  })