(function (){
   angular.module("router").controller(["routeService", RouteController]).
   config(["$stateProvider", Provider]);  
   var states;
   function test($stateProvider){
      for(state in $stateProvider)
      alert (state);
   }
   
   function Provider(stateProvider){
      states.forEach(function(state) {
      $stateProvider.state(state);
      });
   }
   function RouteController(stateProvider){
      states=stateProvider.getStates();
      test();
      alert("aa");
   }
})();