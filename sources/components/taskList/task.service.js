(function(){
	angular.module("taskList").
		service("taskService",TaskService);

      function TaskService(){
         var vmTaskServ=this;
         vmTaskServ.addTask=addTask;
         vmTaskServ.delTask=delTask;
         vmTaskServ.selTask=selTask;

         function addTask(tasksData){
            tasksData.data.todos.push({
               title:vmTaskServ.task,
               done: false });
         }
         function delTask(tasksData, completeTask){
            var oldTodos = tasksData.data.todos;
            for(var i=0;i<oldTodos.length;i++)
               if(oldTodos[i].done==true){
                  completeTask.push({
                     title:oldTodos[i].title,
                     done:oldTodos[i].done
                     });
                  oldTodos.splice(i,1);
                  i--;
            }
         }
         function selTask(tasksData){
            if(tasksData&&tasksData.data){
               var oldTodos = tasksData.data.todos;
               var length=oldTodos.length;
               var count=0;
               for(var i=0;i<oldTodos.length;i++)
                  if(oldTodos[i].done==true){
                     count++
               }
               return {
                  length:length,
                  count:count
               } 
            }
         }
         
      }
})();
