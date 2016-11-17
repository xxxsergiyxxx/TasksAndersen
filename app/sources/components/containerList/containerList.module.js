import containerInfo from '../containerInfo/info.module.js'
export default angular.module("containerList",[
   containerInfo.name
   ]);
require("./containerList.service.js");
require("./containerList.component.js");
require("./task.service.js");
require("./directives/taksList.directive.js");
