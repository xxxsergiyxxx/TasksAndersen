;var Runner=(function(){
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
	function ParseId(id){
		var type=id.substring(0,id.lastIndexOf("_"));
		var id=id.substring(id.lastIndexOf("_")+1);
		var obj={type:type, id:id};
		return obj;
	}
	return{
		resetSelected:resetSelected,
		addToMasEnabledComponents:addToMasEnabledComponents,
		deleteElemMasEnabledComponents:deleteElemMasEnabledComponents,
		ComponentIndexOf:ComponentIndexOf,
		addComponetsToPage:addComponetsToPage,
		addReceptsToPage:addReceptsToPage,
		showAvailableComponents:showAvailableComponents,
		receptConfirm:receptConfirm,
		addToUserRecept:addToUserRecept,
		findAllReceptsForSelectedComp:findAllReceptsForSelectedComp,
		findReceptForSelectedComp:findReceptForSelectedComp,
		findComponentById:findComponentById,
		findReceptById:findReceptById,
		addNewRec:addNewRec,
		addNewComp:addNewComp,
		Main:Main,
		ParseId:ParseId,
	};
})();