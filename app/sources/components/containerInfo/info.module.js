import headerData from '../headerData/header.module.js';
import taskList from '../taskList/task.module.js';
import meetList from '../meetList/meet.module.js';
import archiveTasks from '../archiveTasks/archive.module.js';
export default angular.module("containerInfo",
   [
      headerData.name,
      taskList.name,
      meetList.name,
      archiveTasks.name
   ]);
require("./info.component.js");