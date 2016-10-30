(function(){

	angular.module("meetList").
	component("meetList",{
      templateUrl:"/sources/components/meetList/meet.template.html",
      controller:["dataService", MeetListController],
      controllerAs:"meetCtrl",
      bindings:{
         meetData:"="
      }
   });
	function MeetListController(service){
      this.a=123;
	}
}
)();