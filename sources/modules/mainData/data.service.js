(function(){
	angular.module("dataModule").
      service("dataService", ["$http", DataService]);

   function DataService(http){
      var self=this;
      var masPathes=[
         "/json/mansInfo/jon.json",
         "/json/mansInfo/nik.json",
         "/json/mansInfo/victor.json"
      ];
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

      (function memoryAllocation(){
         for(var i=0;i<masPathes.length;i++){
            _masMansInfo[i]={};
            _masTasks[i]={};
            _masMeetengs[i]={};
            
         }
      })();

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
         return _masCompleteTask;
      }

      function getManId(id){
         return http.get(masPathes[id]).then(function(res){
            _masMansInfo[idData].data=res.data
            return res.data.toDoList;
         })
      }
      function getManTasks(path){
         return http.get(path).then(function(res){
            _masTasks[idData].data=res.data;
            return res.data.meetingsFilePath;
         });
      }
      function getManMeet(path){
         return http.get(path).then(function(res){
            _masMeetengs[idData].data=res.data;
         });
      }
      function getData(id){
         idData=id;
         if(!_masMansInfo[id].data){
            getManId(id).then(getManTasks).then(getManMeet);
         }
      }
   }
}
)();