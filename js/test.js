var container_components=document.getElementById("container_components");
var constract_container=document.getElementById("constract_container");
var userRecept=[];
var componentsArch=ReceptCollection.ComponentsArch;
var receptsArch=ReceptCollection.receptsArch;
function addComponetsToPage(typeComponent,arrayComponents){
	var htmlComponents="";
	for(var compIndex=0;compIndex<arrayComponents.length;compIndex++){
		htmlComponents+='<div class="component" draggable="true" id="'+typeComponent+'_'+arrayComponents[compIndex].getComponentId()+'">'
		+arrayComponents[compIndex].getComponentName()+'</div>\n';
	}
	return htmlComponents;
}
container_components.addEventListener("dragstart",drag);
container_components.addEventListener("drop",dropToContainer);
container_components.addEventListener("dragover",allowDrop);
constract_container.addEventListener("dragstart",drag);
constract_container.addEventListener("drop",dropToConstract);
constract_container.addEventListener("dragover",allowDrop);
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropToContainer(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.target.id=="container_components")
		ev.target.appendChild(document.getElementById(data));
	
}
function dropToConstract(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.target.id=="constract_container")
		ev.target.appendChild(document.getElementById(data));
	
}
function addToUserRecept(component){
	userRecept.push(component.getComponentId());
}
function findComponentById(componentsArray){
	
}
container_components.innerHTML=addComponetsToPage("arch",componentsArch);
