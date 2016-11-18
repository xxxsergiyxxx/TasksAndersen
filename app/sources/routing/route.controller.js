var about=require('html!../templates/about.template.html');
var hello=require('html!../templates/hello.template.html');
class Provider{
   constructor (stateProvider,urlRouterProvider){
      var states=
      [
         {
           name: 'hello',
           url: '/hello',
           template:hello
         },
         {
           name: 'about',
           url: '/about',
           template:about
         },
         {
           name: 'people',
           url: '/people',
           component:"containerList",
           resolve:{
              peoples:["dataService",this.getPeoples]
           }
         },
         {
           name: 'people.allInfo',
           abstract:true,
           url: '/{name}',
           component:"containerInfo",
           resolve:{
            getInfo:["peoples", "$stateParams","dataService",this.getInfo]
          }
         },
         {
           name:'people.allInfo.header',
           url:'/header',
           component:"headerInfo",
           resolve:{
              mansInfo:["dataService",this.mansInfo]
            }
         },
         {
           name:'people.allInfo.taskList',
           url:'/taskList',
           component:"taskList",
           resolve:{
              tasksData:["dataService", this.taskData],
              masComplete:["dataService", this.masComplete],
              addTask:["taskService", this.addTask],
              delTask:["taskService", this.delTask],
              selTask:["taskService", this.selTask] 
            }
         },
         {
           name:'people.allInfo.meets',
           url:'/meets',
           component:"meetList",
           resolve:{
              meetData:["dataService", this.meetData]
            }
         },
         {
           name:'people.allInfo.archive',
           url:'/archive',
           component:"archiveTasks",
           resolve:{
              masComplete:["dataService", this.masComplete]
            }
         }
       ]
     states.forEach(state=>{
        stateProvider.state(state);
     });
     urlRouterProvider.otherwise('/');
     var salfe=this;
   }

   meetData(dataService){
      return dataService.getDataMeetengs();
   }
   masComplete(dataService){
      return dataService.getMasCompleteTask();
   }

   taskData(dataService){
      return dataService.getDataTasks();
   }

   getPeoples(dataService){
      return dataService.getAllMan();
   }

   addTask(taskService){
      return taskService.addTask;
   }

   delTask(taskService){
      return taskService.delTask;
   }

   selTask(taskService){
      return taskService.selTask;
   }
   getInfo(peoples, stateParams,dataService){
      var findPeople=(peoples,stateParams)=>{
        return peoples.find(person=> {           
          return person.name === stateParams.name;
        });
     }
      var people=findPeople(peoples,stateParams);
      if(people){
        return dataService.getData(people.info,people.name);
      }
   }
   mansInfo(dataService){
      return dataService.getDataMansInfo();
   }
   static getStates(){
    const inj=(stateProvider, urlRouterProvider)=>{
        return new Provider(stateProvider,urlRouterProvider)
      };
      inj.$inject=["$stateProvider","$urlRouterProvider"];
      return inj;
   }
}
Provider.$inject=["$stateProvider","$urlRouterProvider"];
export default Provider.getStates();