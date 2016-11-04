(function(){
   angular.module("containerList").
      component("containerList",{
         templateUrl:"/sources/components/containerList/containerList.template.html",
         controller:["dataService","taskService", ContainerListController],
         controllerAs:"contCtrl"
      });
   function ContainerListController (service, taskService){     
      var getRandom=getRandom;
      var vmContainerList=this;
      vmContainerList.getInfo=getInfo;
      vmContainerList.delTask=taskService.delTask;
      vmContainerList.addTask=taskService.addTask;
      vmContainerList.selTask=taskService.selTask;
      function getRandom(){
         return Math.floor(Math.random() * 3);
      }
      function getInfo(){
         var id=getRandom();
         service.getData(id);
         vmContainerList.mansInfo=service.getDataMansInfo();
         vmContainerList.tasksData=service.getDataTasks();
         vmContainerList.meetData=service.getDataMeetengs();
         vmContainerList.completeListData=service.getMasCompleteTask();
      }
   }
})();