(function(){
   angular.module("containerList").
      component("containerList",{
         templateUrl:"/sources/components/containerList/containerList.template.html",
         bindings:{
            peoples:'<'
         }
      });
})();