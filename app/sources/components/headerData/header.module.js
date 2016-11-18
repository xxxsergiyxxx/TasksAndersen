var template=require("html!./header.template.html")
export default angular.module("headerData",[])
               .component("headerInfo",{
               template,
                  controllerAs:"headCtrl",
                  bindings:{
                     mansInfo:"<",
                  }
            })
