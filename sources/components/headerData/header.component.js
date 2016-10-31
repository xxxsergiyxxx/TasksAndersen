(function (){

   angular.module("headerData").
   component("headerInfo",{
      templateUrl:"/sources/components/headerData/header.template.html",
         controller:HeaderController,
         controllerAs:"headCtrl",
         bindings:{
            mansInfo:"=",
         }
   })
   function HeaderController(){
      
   }
})();