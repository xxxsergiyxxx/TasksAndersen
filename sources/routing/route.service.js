(function(){
   angular.module("routerModule").service("routeService", RouteService);
   function RouteService(){
      alert("routeService");
         var _states = [
          { name: 'hello', url: '/hello', component: 'meetList' },
          { name: 'about', url: '/about', component: 'headerList' },
         ];
        this.getStates=function(){
            return _states;
        }
   }   
})();