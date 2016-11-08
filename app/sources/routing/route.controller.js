(function (){
   angular.module("routerModule").config(["$stateProvider","$urlRouterProvider", Provider]);
   function Provider(stateProvider,urlRouterProvider){
      stateProvider.state({
       name: 'hello',
       url: '/hello',
       templateUrl:"/sources/templates/hello.template.html"
     }).state({
       name: 'about',
       url: '/about',
       templateUrl:"/sources/templates/about.template.html"
     }).state({
       name: 'people',
       url: '/people',
       component:"containerList",
       resolve:{
          peoples:["dataService",getPeoples]
       }
     }).state({
       name: 'people.allInfo',
       abstract:true,
       url: '/{name}',
       component:"containerInfo",
       resolve:{
        getInfo:["peoples", "$stateParams","dataService",getInfo]
      }
     }).state({
       name:'people.allInfo.header',
       url:'/header',
       component:"headerInfo",
       resolve:{
          mansInfo:["dataService", mansInfo]
        }
     }).state({
       name:'people.allInfo.taskList',
       url:'/taskList',
       component:"taskList",
       resolve:{
          tasksData:["dataService", taskData],
          masComplete:["dataService", masComplete],
          addTask:["taskService", addTask],
          delTask:["taskService", delTask],
          selTask:["taskService", selTask] 
        }
     }).state({
       name:'people.allInfo.meets',
       url:'/meets',
       component:"meetList",
       resolve:{
          meetData:["dataService", meetData]
        }
     }).state({
       name:'people.allInfo.archive',
       url:'/archive',
       component:"archiveTasks",
       resolve:{
          masComplete:["dataService", masComplete]
        }
     })

     urlRouterProvider.otherwise('/');
   }

   function meetData(dataService){
      return dataService.getDataMeetengs();
   }
   function masComplete(dataService){
      return dataService.getMasCompleteTask();
   }

   function taskData(dataService){
      return dataService.getDataTasks();
   }

   function getPeoples(dataService){
      return dataService.getAllMan();
   }

   function addTask(taskService){
      return taskService.addTask;
   }

   function delTask(taskService){
      return taskService.delTask;
   }

   function selTask(taskService){
      return taskService.selTask;
   }
   function findPeople(peoples,stateParams){
      return peoples.find(function(person) {           
        return person.name === stateParams.name;
      });
   }
   function getInfo(peoples, stateParams,dataService){
      var people=findPeople(peoples,stateParams);
      if(people){
        return dataService.getData(people.info,people.name);
      }
   }

   function mansInfo(dataService){
      return dataService.getDataMansInfo();
   }

   
})();