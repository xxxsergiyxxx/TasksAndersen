(function(){
   class TaskService{
      constructor(){
      }
      addTask(tasksData, task){
         if(tasksData){
            tasksData.data.todos.push({
               title:task,
               done: false });
         }
      }
      delTask(tasksData, completeTask){
         if(tasksData){
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
      }
      selTask(tasksData){
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
	angular.module("containerList").
		service("taskService",TaskService);
})();
