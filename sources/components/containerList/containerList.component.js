(function(){
   angular.module("containerList").
      component("containerList",{
         templateUrl:"/sources/components/containerList/containerList.template.html",
         controller:["dataService", ContainerListController],
         controllerAs:"contCtrl"
      });
   function ContainerListController (service){     
      var getRandom=getRandom;
      var vmContainerList=this;
      vmContainerList.getInfo=getInfo;
      vmContainerList.alertTask=function(a){
         alert(a);
      }
      function getRandom(){
         return Math.floor(Math.random() * 3);
      }
      function getInfo(){
         var id=getRandom();
         service.getData(id);
         vmContainerList.mansInfo=service.getDataMansInfo();
         vmContainerList.tasksData=service.getDataTasks();
         vmContainerList.meetData=service.getDataMeetengs();
         vmContainerList.compelteListData=service.getMasCompleteTask();
      }
   }
})();