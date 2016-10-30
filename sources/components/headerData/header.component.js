(function (){

   angular.module("headerData").
   component("headerInfo",{
      templateUrl:"/sources/components/headerData/header.template.html",
         controller:["dataService",HeaderController],
         controllerAs:"headCtrl",
         bindings:{
            mansInfo:"=",
            testValue:"="
         }
   })
   function HeaderController(service){
      
   }
})();