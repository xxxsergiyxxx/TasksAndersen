import containerInfo from '../containerInfo/info.module.js';
import DataService from './containerList.service.js';
import TaskService from './task.service.js';
import TaskList from './directives/taksList.directive.js';
var template=require("html!./containerList.template.html");
export default angular.module("containerList",
   [
      containerInfo.name
   ])
   .service("dataService",["$http","$q", DataService])
   .service("taskService",TaskService)
   .component("containerList",{
      template,
      bindings:{
         peoples:'<'
      }
   })
   .directive("specialText", TaskList);