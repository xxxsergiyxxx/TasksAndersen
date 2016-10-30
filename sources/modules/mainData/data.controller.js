(function(){
   angular.module("dataModule").
   controller(["dataService",DataController]);
   function DataController (service){
      this.obj=service.getData(0);
      this.myalert=function(){
         service.test();
      }
   }
})();