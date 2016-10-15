var container_components=document.getElementById("container_components");
var constract_container=document.getElementById("constract_container");
var show_recept_list=document.getElementById("show_recept");
var available_recepts=document.getElementById("available_recepts");
var userRecept=[];
var current={};
var masEnabledComponents=[];
InstallCurrent("arch",current);
function InstallCurrent(type, current){
	switch (type)
	{
		case "arch":
		{
			current.currentRec=ReceptCollection.ReceptsArch;
			current.currentComp=ReceptCollection.ComponentsArch;
			current.currentTypeComp="archComp";
			current.currentTypeRec="archRec";
			current.currentHtmlComponent="";
			return type;
		}
	}
}
function resetSelected(){
	container_components.innerHTML=current.currentHtmlComponent;
}
function addToMasEnabledComponents(elemId){
	var idElem=ParseId(elemId).id;
	var index=masEnabledComponents.indexOf(idElem);
	if(index==-1)
		masEnabledComponents.push(idElem);
}
function deleteElemMasEnabledComponents(elemId){
	var idElem=ParseId(elemId).id;
	var index=masEnabledComponents.indexOf(idElem);
	if(index!==-1)
		masEnabledComponents.splice(index,1);
}
function addComponetsToPage(typeComponent,arrayComponents){
	var htmlComponents="";
	for(var compIndex=0;compIndex<arrayComponents.length;compIndex++){
		htmlComponents+='<div class="component" draggable="true" id="'+typeComponent+'_'+arrayComponents[compIndex].getComponentId()+'">'
		+arrayComponents[compIndex].getComponentName()+'</div>\n';
	}
	current.currentHtmlComponent=htmlComponents;
	return htmlComponents;
}
function addReceptsToPage(typeRecept,arrayRecepts){
	var htmlRecepts="";
	for(var recIndex=0;recIndex<arrayRecepts.length;recIndex++){
		htmlRecepts+='<option class="recept" id="'+typeRecept+'_'+arrayRecepts[recIndex].getReceptId()+'">'
		+arrayRecepts[recIndex].getReceptName()+'</option>\n';
	}
	return htmlRecepts;
}
function ComponentIndexOf(component, componentsList){
	for(var indexComp=0;indexComp<componentsList.length;indexComp++){
		if(component.getComponentId()===componentsList[indexComp].getComponentId())
			return indexComp;
	}
	return -1;
}
function showAvailableComponents(type, recept, components){//выделить компоненты
	resetSelected();
	for(var compIndex=0;compIndex<components.length;compIndex++){
		if(ComponentIndexOf(components[compIndex],recept)!==-1&&masEnabledComponents.indexOf(components[compIndex].getComponentId())===-1)
			document.getElementById(type+"_"+components[compIndex].getComponentId()).style.border="1px solid green";
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
	if(ev.target.id=="container_components"){
		ev.target.appendChild(document.getElementById(data));
		deleteElemMasEnabledComponents(data);
		findAllReceptsForSelectedComp(current.currentRec,masEnabledComponents);
	}
	
}
function dropToConstract(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.target.id=="constract_container"){
		ev.target.appendChild(document.getElementById(data));		
		addToMasEnabledComponents(data);
		findAllReceptsForSelectedComp(current.currentRec,masEnabledComponents);
	}
	
}
function receptConfirm(receptType, idRecept){
	alert(receptType+"_"+idRecept);
}
function addToUserRecept(component){
	userRecept.push(component.getComponentId());
}
function findAllReceptsForSelectedComp(allRecepts, masEnabledComponents){
	var availableReceptsHtml="";
	for(var indexAllRecepts=0;indexAllRecepts<allRecepts.length;indexAllRecepts++){
		if(findReceptForSelectedComp(allRecepts[indexAllRecepts].getRecept(),masEnabledComponents)){
			availableReceptsHtml+='<li>'+allRecepts[indexAllRecepts].getReceptName()+'</li>\n';
		}
	}
	available_recepts.innerHTML=availableReceptsHtml;
}
function findReceptForSelectedComp(receptArray,masEnabledComponents){
	var concurencyCount;
	concurencyCount=0;
	for(var indexMasEnabledComponents=0;indexMasEnabledComponents<masEnabledComponents.length;indexMasEnabledComponents++){
		var component=findComponentById(masEnabledComponents[indexMasEnabledComponents],current.currentComp);
		if(ComponentIndexOf(component,receptArray)!==-1){
			concurencyCount++;
			if((concurencyCount==receptArray.length)||(concurencyCount==masEnabledComponents.length)){
				return true;
			}
		}
	}
}
function findComponentById(idComponent, componentsArray){
	var idComponent=ParseId(idComponent).id;
	for(var indexComp=0;indexComp<componentsArray.length;indexComp++){
		if(idComponent==componentsArray[indexComp].getComponentId()){
			return componentsArray[indexComp];
		}
	}
}
function findReceptById(idRecept, receptArray){
	var idRecept=ParseId(idRecept).id;
	for(var indexRecept=0;indexRecept<receptArray.length;indexRecept++){
		if(receptArray[indexRecept].getReceptId()==idRecept){
			return receptArray[indexRecept].getRecept();
		}
	}
}
show_recept_list.addEventListener("click",function(ev){
	if(ev.target.className=="recept"){
		showAvailableComponents(current.currentTypeComp,findReceptById(ev.target.id, current.currentRec), current.currentComp);
		masEnabledComponents=null;
		masEnabledComponents=[];
		constract_container.innerHTML="";
		available_recepts.innerHTML="";
	}
});
container_components.addEventListener("click",function(ev){
	if(ev.target.className=="component"){
		var idElem=ParseId(ev.target.id).id;
		var position=masEnabledComponents.indexOf(idElem);
		if(position==-1){
			addToMasEnabledComponents(ev.target.id);
			ev.target.style.border="1px solid green";
		}
		else{
			deleteElemMasEnabledComponents(ev.target.id);
			ev.target.style.border="1px solid red";
		}
	}
});
container_components.innerHTML=addComponetsToPage(current.currentTypeComp,current.currentComp);
show_recept_list.innerHTML=addReceptsToPage(current.currentTypeRec,current.currentRec);
