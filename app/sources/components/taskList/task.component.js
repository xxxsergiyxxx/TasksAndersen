var template=require('html!./task.template.html');
class TaskListController{
   constructor(){
      this.adding=()=>{
         this.addTask(this.tasksData,this.task);
      };
      this.delete=()=>{
         this.delTask(this.tasksData,this.masComplete);
      };
      this.select=()=>{
         this.countInfo= this.selTask(this.tasksData);
         return this.countInfo;
      };  
   }
}
export default {
      template,
      controller:TaskListController,
      controllerAs:"taskCtrl",
      bindings:{
         tasksData:"<",
         masComplete:"<",
         addTask:"<",
         delTask:"<",
         selTask:"<"
      }
   };