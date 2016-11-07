(function(){
	angular.module("containerList").
      service("dataService",["$http","$q", DataService]);

   function DataService(http, Q){
      var self=this;
      var _masNames=[];
      var _masMansInfo=[];
      var _masMeetengs=[];
      var _masTasks=[];
      var _masCompleteTask=[];
      var idData;
      self.getData=getData;
      self.getDataMansInfo=getDataMansInfo;
      self.getDataMeetengs=getDataMeetengs;
      self.getDataTasks=getDataTasks;
      self.getMasCompleteTask=getMasCompleteTask;
      self.getAllMan=getAllMan;
      
      function memoryAllocation(){
         for(var i=0;i<_masNames.length;i++){
            _masMansInfo[_masNames[i]]={};
            _masTasks[_masNames[i]]={};
            _masMeetengs[_masNames[i]]={};
            _masCompleteTask[_masNames[i]]=[];          
         }
      };

      function getDataMansInfo(){
         return _masMansInfo[idData];
      }
      function getDataTasks(){
         return _masTasks[idData];
      }
      function getDataMeetengs(){
         return _masMeetengs[idData];
      }
      function getMasCompleteTask(){
         return _masCompleteTask[idData];
      }
      function getAllMan(){
         return http.get("/json/allMan.json").then(function(res){
            for(var i=0;i<res.data.length;i++){
               _masNames[i]=res.data[i].name;
            }
            memoryAllocation();
            return res.data;
         })
      }
      function getManId(path, def){
         return http.get(path).then(function(res){
            _masMansInfo[idData].data=res.data
            return {
               path:res.data.toDoList,
               def:def
            };
         })
      }
      function getManTasks(data){
         return http.get(data.path).then(function(res){
            _masTasks[idData].data=res.data;
            data.path=res.data.meetingsFilePath;
            return data;
         });
      }
      function getManMeet(data){
         return http.get(data.path).then(function(res){
            _masMeetengs[idData].data=res.data
            data.def.resolve();         
            return res.data;
         });
      }
      function getData(path, name){
         idData=name;
         if(!_masMansInfo[name].data){
            var deferred = Q.defer();
            getManId(path, deferred).then(getManTasks).then(getManMeet);
            return deferred.promise;
         }
      }
   }
}
)();