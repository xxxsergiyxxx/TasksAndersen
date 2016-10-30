(function(){
	angular.module("taskList").
		service("taskService",TaskService);

      function TaskService(){
         var vmTaskServ=this;
         vmTaskServ.addTask=addTask;
         vmTaskServ.delTask=delTask;
         
         function addTask(tasksData){
            tasksData.data.todos.push({title:vmTaskServ.task,done: false });
         }
         function delTask(tasksData){
            var oldTodos = tasksData.data.todos;
            for(var i=0;i<oldTodos.length;i++){
               if(oldTodos[i].done==true){
                  oldTodos.splice(i,1);
                  i--;
               }
            }
         }
      }
})();
