(function(){
   angular.module("router").service("routeService", RouteService);
   function RouteService(){
         var _states = [
          { name: 'hello', url: '/hello', component: 'meetList' },
          { name: 'about', url: '/about', component: 'headerList' },
         ];
        this.getStates=function(){
            return _states;
        }
   }   
})();