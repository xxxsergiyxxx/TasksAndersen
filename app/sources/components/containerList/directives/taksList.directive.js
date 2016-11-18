export default function TaskList(){
   return {
      link:function(scope, element, attr){
               element.on("click",function(ev){
                  if(ev.target.type=="checkbox"){
                     if(element.css("text-decoration")=="none"||!element.css("text-decoration")){
                        element.css("text-decoration","line-through");
                        element.css("color","gray");
                     }else{
                        element.css("text-decoration","none");
                        element.css("color","black");
                     }
                  }
               });
            },
      restrict:"A"
   }
}