(function(){

	angular.module("taskList").
	component("taskList",{
      templateUrl:"/sources/components/taskList/task.template.html",
      controller:["taskService", TaskListController],
      controllerAs:"taskCtrl",
      bindings:{
         tasksData:"=",
         masComplete:"="
      }
   });

   function TaskListController(taskService){
      var vmTaskList=this;
      vmTaskList.addTask=function(){
         taskService.task=vmTaskList.task;
         taskService.addTask(vmTaskList.tasksData);
      };
      vmTaskList.delTask=function(){
         taskService.delTask(vmTaskList.tasksData,vmTaskList.masComplete);
      };
      vmTaskList.selTask=function(){
         return taskService.selTask(vmTaskList.tasksData);
      };      
   }
}
)();