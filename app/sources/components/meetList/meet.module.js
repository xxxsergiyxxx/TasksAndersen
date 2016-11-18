var template=require("html!./meet.template.html");
export default angular.module("meetList",[])
               .component("meetList",{
                  template,
                  controllerAs:"meetCtrl",
                  bindings:{
                     meetData:"<"
                  }
               });