(function(){

	angular.module("taskList").
	component("taskList",{
      templateUrl:"/sources/components/taskList/task.template.html",
      controller:["dataService", TaskListController],
      controllerAs:"taskCtrl",
      bindings:{
         tasksData:"="
      }
   });

   function TaskListController(service){
      var vmTaskList=this;
      vmTaskList.addTask=addTask;
      vmTaskList.delTask=delTask;
      function addTask(){
         vmTaskList.tasksData.data.todos.push({title:vmTaskList.task,done: false });
      }
      function delTask(){
         var oldTodos = vmTaskList.tasksData.data.todos;
         vmTaskList.tasksData.data.todos = [];
         angular.forEach(oldTodos, function(todo) {
           if (!todo.done) vmTaskList.tasksData.data.todos.push(todo);
         });
      }

   }
}
)();