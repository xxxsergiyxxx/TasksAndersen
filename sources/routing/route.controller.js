(function (){
   angular.module("routerModule").config(["$stateProvider", Provider]). 
   controller("routeController",RouteController);
   var states;
   function Provider(stateProvider){
      stateProvider.state({
       name: 'hello',
       url: '/hello',
       templateUrl: '/tab1.html'
     }).state({
       name: 'about',
       url: '/about',
       templateUrl: 'tab2.html'
     }).state({
       name:'test',
       url:'/test',
       component:"test",
       resolve:{
         myFunction:"asd"
       }
     })
   }
   function RouteController(routeService){
      //states=routeService.getStates();
      //test();
      alert("aa");
   }
})();