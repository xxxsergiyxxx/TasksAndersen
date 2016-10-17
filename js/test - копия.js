var container_components=document.getElementById("container_components");
var constract_container=document.getElementById("constract_container");
var show_recept_list=document.getElementById("show_recept");
var available_recepts=document.getElementById("available_recepts");
var add_component=document.getElementById("add_component");
var recepts=document.getElementById("recepts");
var all_reset=document.getElementById("all_reset");
var select_equip=document.getElementById("select_equip");
var TYPE;
var current;
var cashComp=[1,2,3];
Main("arch");
var koef,comp_name,rec_name;
var userRecept=[];
var masEnabledComponents=[];
function resetSelected(){
	for(var indexCashComp=0;indexCashComp<cashComp.length;indexCashComp++){
		cashComp[indexCashComp].style.border="1px solid red";
	}
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
			if((concurencyCount==receptArray.length)){
				return true;
			}
		}
	}
}
function findComponentById(idComponent, componentsArray, flag){
	var idComponent;
	if(flag)
		idComponent=idComponent;
	else
		idComponent=ParseId(idComponent).id;
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
function addNewRec(newId, newRec){
	var opt = document.createElement('option');
	opt.className="recept";
	opt.id=current.currentTypeRec+'_'+newId;
	show_recept_list.appendChild(opt);
	opt.appendChild(document.createTextNode(rec_name.value));
	current.currentRec.push(newRec);
	masEnabledComponents=[];
	resetSelected();
}
recepts.addEventListener("click", function(e){
	if(e.target.id=="rec_add"){
		var masComp=[];
		var newId,newRec;
		for(var indexMasEnabledComponents=0;indexMasEnabledComponents<masEnabledComponents.length;indexMasEnabledComponents++)
			masComp.push(findComponentById(masEnabledComponents[indexMasEnabledComponents],current.currentComp,true));
		switch (TYPE)
		{
			case "arch":
			{		
				newId=ClassArchRecept.getLastId()+1;		
				newRec=new ClassArchRecept(rec_name.value,masComp,newId);	
				addNewRec(newId, newRec);				
				break;
			}
			case "cuiras":
			{		
				newId=ClassCuirassRecept.getLastId()+1;	
				newRec=new ClassCuirassRecept(rec_name.value,masComp,newId);			
				addNewRec(newId, newRec);
				break;
			}
		}
	}
});
function addNewComp(newId, newComp){	
	current.currentComp.push(newComp);
	var div = document.createElement('div');
	div.className = "component";
	div.id=current.currentTypeComp+'_'+newId;
	div.draggable="true";
	container_components.appendChild(div);
	div.appendChild(document.createTextNode(comp_name.value));
	cashComp.push(document.getElementById(current.currentTypeComp+'_'+newId));
}
add_component.addEventListener("click", function(e){
	if(e.target.id=="comp_add"){
		var newId,newComp;
		switch (TYPE)
		{
			case "arch":
			{		
				newId=ClassArchComponent.getLastId()+1;	
				newComp=new ClassArchComponent(comp_name.value,koef.value,newId);			
				addNewComp(newId,newComp);
				break;
			}
			case "cuiras":
			{		
				newId=ClassCuirasComponent.getLastId()+1;	
				newComp=new ClassCuirasComponent(comp_name.value,koef.value,newId);			
				addNewComp(newId,newComp);
				break;
			}
		}
	}
});
all_reset.addEventListener("click", function(e){
	masEnabledComponents=[];
	available_recepts.innerHTML="";
	for(var indexCashComp=0;indexCashComp<cashComp.length;indexCashComp++)
		container_components.appendChild(cashComp[indexCashComp]);
	constract_container.innerHTML="";
});
select_equip.addEventListener("change", function(e){
	switch(select_equip.selectedIndex)
	{
		case 0: {
			Main("arch");
			break;
		}
		case 1:{
			Main("cuiras")
			break;
		}
	}
});
function loadHtml()
{
	container_components.innerHTML=addComponetsToPage(current.currentTypeComp,current.currentComp);
	show_recept_list.innerHTML=addReceptsToPage(current.currentTypeRec,current.currentRec);
	add_component.innerHTML=current.currentHtmlAddComp;
	recepts.innerHTML=current.currentHtmlAddRec;
}

function Main(type){
	TYPE=type;
	current=ReceptCollection(TYPE);
	loadHtml();
	constract_container.innerHTML="";
	available_recepts.innerHTML="";
	masEnabledComponents=[];
	cashComp=(function(){
		var masEl=[];
		for(var indexCashComp=0;indexCashComp<current.currentComp.length;indexCashComp++)
			masEl.push(document.getElementById(current.currentTypeComp+"_"+current.currentComp[indexCashComp].getComponentId()));
		return masEl;
	})();	
	koef=document.getElementById("koef");
	comp_name=document.getElementById("comp_name");
	rec_name=document.getElementById("rec_name");
}