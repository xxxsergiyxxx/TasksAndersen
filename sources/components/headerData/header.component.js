(function (){

   angular.module("headerData").
   component("headerInfo",{
      templateUrl:"/sources/components/headerData/header.template.html",
         controllerAs:"headCtrl",
         bindings:{
            mansInfo:"<",
         }
   })
})();