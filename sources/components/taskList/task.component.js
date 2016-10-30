(function(){

	angular.module("taskList").
	component("taskList",{
      templateUrl:"/sources/components/taskList/task.template.html",
      controller:["dataService", "taskService", TaskListController],
      controllerAs:"taskCtrl",
      bindings:{
         tasksData:"="
      }
   });

   function TaskListController(service,taskService){
      var vmTaskList=this;
      vmTaskList.addTask=function(){
         taskService.task=vmTaskList.task;
         taskService.addTask(vmTaskList.tasksData);
      };
      vmTaskList.delTask=function(){
         taskService.delTask(vmTaskList.tasksData);
      };
      vmTaskList.selTodos=taskService.selTodos;      
   }
}
)();