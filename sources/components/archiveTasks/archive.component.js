(function(){
   angular.module("archiveTasks").
   component("archiveTasks",{
      templateUrl:"sources/components/archiveTasks/archive.template.html",
      bindings:{
         masComplete:"<",
      }
   });
})();
