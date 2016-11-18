var template=require("html!./archive.template.html");
export default angular.module("archiveTasks",[])
               .component("archiveTasks",{
                  template,
                  bindings:{
                     masComplete:"<",
                  }
               });

