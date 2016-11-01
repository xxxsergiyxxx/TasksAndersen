(function(){
   angular.module("archiveTasks").
   component("archiveTasks",{
      controller:ArchiveTasks,
      controllerAs:"archCtrl",
      templateUrl:"sources/components/archiveTasks/archive.template.html",
      bindings:{
         masComplete:"<",
      }
   });
   function ArchiveTasks(){
   }
})();
