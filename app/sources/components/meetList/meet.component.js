(function(){

	angular.module("meetList").
	component("meetList",{
      templateUrl:"/sources/components/meetList/meet.template.html",
      controllerAs:"meetCtrl",
      bindings:{
         meetData:"<"
      }
   });
}
)();