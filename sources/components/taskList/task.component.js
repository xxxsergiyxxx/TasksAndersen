(function(){

	angular.module("taskList").
	component("taskList",{
      templateUrl:"/sources/components/taskList/task.template.html",
      controller:TaskListController,
      controllerAs:"taskCtrl",
      bindings:{
         tasksData:"<",
         masComplete:"<",
         newTask:"<",
         addTask:"&",
         delTask:"&",
         selTask:"&"
      }
   });

   function TaskListController(){
      var vmTaskList=this;
      vmTaskList.adding=function(){
         vmTaskList.addTask({tasksData:vmTaskList.tasksData,task:vmTaskList.task});
      };
      vmTaskList.delete=function(){
         vmTaskList.delTask({tasksData:vmTaskList.tasksData,completeListData:vmTaskList.masComplete});
      };
      vmTaskList.select=function(){
         vmTaskList.countInfo= vmTaskList.selTask({tasksData:vmTaskList.tasksData});
         return vmTaskList.countInfo;
      };      
   }
}
)();