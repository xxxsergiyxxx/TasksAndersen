   class DataService{
      constructor(http, Q){
         this._masNames=[];
         this._masMansInfo=[];
         this._masMeetengs=[];
         this._masTasks=[];
         this._masCompleteTask=[];
         this.idData;
         this.http=http;
         this.Q=Q;
      }
      memoryAllocation(){
         for(var i=0;i<this._masNames.length;i++){
            this._masMansInfo[this._masNames[i]]={};
            this._masTasks[this._masNames[i]]={};
            this._masMeetengs[this._masNames[i]]={};
            this._masCompleteTask[this._masNames[i]]=[];          
         }
      }

      getDataMansInfo(){
         return this._masMansInfo[this.idData];
      }
      getDataTasks(){
         return this._masTasks[this.idData];
      }
      getDataMeetengs(){
         return this._masMeetengs[this.idData];
      }
      getMasCompleteTask(){
         return this._masCompleteTask[this.idData];
      }
      getAllMan(){
         return this.http.get("/json/allMan.json").then(res =>{
            for(var i=0;i<res.data.length;i++){
               this._masNames[i]=res.data[i].name;
               alert
            }
            this.memoryAllocation();
            return res.data;
         })
      }
      getManId(path, def){
         var salfe=this;
         return this.http.get(path).then(res=>{
            this._masMansInfo[this.idData].data=res.data
            return {
               path:res.data.toDoList,
               def:def
            };
         })
      }
      getManTasks(data){
         return this.http.get(data.path).then(res =>{
            this._masTasks[this.idData].data=res.data;
            data.path=res.data.meetingsFilePath;
            return data;
         });
      }
      getManMeet(data){
         return this.http.get(data.path).then(res =>{
            this._masMeetengs[this.idData].data=res.data
            data.def.resolve();         
            return res.data;
         });
      }
      getData(path, name){
         this.idData=name;
         alert(name);
         if(!this._masMansInfo[name].data){
            var deferred = this.Q.defer();
            var th=this;
            this.getManId(path, deferred).then(this.getManTasks).then(this.getManMeet);
            return deferred.promise;
         }
      }
   }
export default DataService;
      