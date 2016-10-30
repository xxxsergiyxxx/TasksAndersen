(function (){
   angular.module("containerList").
      directive("tasksList", TaskList);
      function TaskList(){
         return function(scope, element, attr){
           // var masTasks=scope.taskCtrl.taskData;
            //element.on("click",function(ev){
               //alert(element.val());
            //});
            //masTasks.data.todos.push({"title":"rock","done":"false"});
         }
      }
})();