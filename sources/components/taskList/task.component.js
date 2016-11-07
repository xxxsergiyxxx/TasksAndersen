(function(){

	angular.module("taskList").
	component("taskList",{
      templateUrl:"/sources/components/taskList/task.template.html",
      controller:TaskListController,
      controllerAs:"taskCtrl",
      bindings:{
         tasksData:"<",
         masComplete:"<",
         addTask:"<",
         delTask:"<",
         selTask:"<"
      }
   });

   function TaskListController(){
      var vmTaskList=this;
      vmTaskList.adding=function(){
         vmTaskList.addTask(vmTaskList.tasksData,vmTaskList.task);
      };
      vmTaskList.delete=function(){
         vmTaskList.delTask(vmTaskList.tasksData,vmTaskList.masComplete);
      };
      vmTaskList.select=function(){
         vmTaskList.countInfo= vmTaskList.selTask(vmTaskList.tasksData);
         return vmTaskList.countInfo;
      };      
   }
}
)();