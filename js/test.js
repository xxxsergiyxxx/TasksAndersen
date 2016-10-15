var container_components=document.getElementById("container_components");
var constract_container=document.getElementById("constract_container");
var show_recept_list=document.getElementById("show_recept");
var userRecept=[];
var componentsArch=ReceptCollection.ComponentsArch;//массив всех компонентов лука
var receptsArch=ReceptCollection.ReceptsArch;//массив всех рецептов лука
var masEnabledComponents=[];
var typesComp={arch:"archComp", cuiras:"cuirasComp"};
var typesRec={arch:"archRec", cuiras:"cuirasRec"};
function addComponetsToPage(typeComponent,arrayComponents){
	var htmlComponents="";
	for(var compIndex=0;compIndex<arrayComponents.length;compIndex++){
		htmlComponents+='<div class="component" draggable="true" id="'+typeComponent+'_'+arrayComponents[compIndex].getComponentId()+'">'
		+arrayComponents[compIndex].getComponentName()+'</div>\n';
	}
	return htmlComponents;
}
function addReceptsToPage(typeRecept,arrayRecepts){
	var htmlRecepts="";
	for(var recIndex=0;recIndex<arrayRecepts.length;recIndex++){
		htmlRecepts+='<option class="recept" id="'+typeRecept+'_'+arrayRecepts[recIndex].getIdRecept()+'">'
		+arrayRecepts[recIndex].getReceptName()+'</option>\n';
	}
	return htmlRecepts;
}
function showAvailableComponents(type, recept, components){//выделить компоненты
	for(var compIndex=0;compIndex<components.length;compIndex++){
		if(recept.indexOf(components[compIndex].getComponentId())!==-1&&masEnabledComponents.indexOf(components[compIndex].getComponentId())===-1)
			document.getElementById(type+"_"+components[compIndex].getComponentId()).style.border="2px solid green";
	}
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
function findComponentById(idComponent, componentsArray){
	
}
function findReceptById(idRecept, receptArray){
	for(var indexRecept=0;indexRecept<receptArray.length;indexRecept++){
		if(receptArray[indexRecept].getReceptId()==idRecept)
			return receptArray[indexRecept].getRecept();
	}
}
show_recept_list.addEventListener("click",function(ev){
	if(ev.target.className=="recept"){
		var component=ParseId(ev.target.id);
		showAvailableComponents(component.type,receptsArch)
	}
});
container_components.innerHTML=addComponetsToPage(typesComp.archComp,componentsArch);
show_recept_list.innerHTML=addReceptsToPage(typesRec.archRec, receptsArch);
