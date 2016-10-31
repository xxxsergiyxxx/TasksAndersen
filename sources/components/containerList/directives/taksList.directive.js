(function (){
   angular.module("containerList").
      directive("specialText", TaskList);
      function TaskList(){
         return {
            link:function(scope, element, attr){
                     element.on("click",function(ev){
                        if(scope.task.done===true){
                           element.css("text-decoration","line-through");
                           element.css("color","gray");
                        }else{
                           element.css("text-decoration","none");
                           element.css("color","black");
                        }
                     });
                  },
            restrict:"A"
         }
      }
})();