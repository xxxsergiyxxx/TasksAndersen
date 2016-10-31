(function(){

	angular.module("meetList").
	component("meetList",{
      templateUrl:"/sources/components/meetList/meet.template.html",
      controller:MeetListController,
      controllerAs:"meetCtrl",
      bindings:{
         meetData:"="
      }
   });
	function MeetListController(){
	}
}
)();