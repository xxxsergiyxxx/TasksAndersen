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
var cashComp=[];
var koef,comp_name,rec_name;
var userRecept=[];
var masEnabledComponents=[];
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
		Runner.deleteElemMasEnabledComponents(data);
		Runner.findAllReceptsForSelectedComp(current.currentRec,masEnabledComponents);
	}
	
}
function dropToConstract(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.target.id=="constract_container"){
		ev.target.appendChild(document.getElementById(data));		
		Runner.addToMasEnabledComponents(data);
		Runner.findAllReceptsForSelectedComp(current.currentRec,masEnabledComponents);
	}
	
}
show_recept_list.addEventListener("click",function(ev){
	if(ev.target.className=="recept"){
		Runner.showAvailableComponents(current.currentTypeComp,Runner.findReceptById(ev.target.id, current.currentRec), current.currentComp);
	}
});
container_components.addEventListener("click",function(ev){
	if(ev.target.className=="component"){
		var idElem=Runner.ParseId(ev.target.id).id;
		var position=masEnabledComponents.indexOf(idElem);
		if(position==-1){
			Runner.addToMasEnabledComponents(ev.target.id);
			ev.target.style.border="1px solid green";
		}
		else{
			Runner.deleteElemMasEnabledComponents(ev.target.id);
			ev.target.style.border="1px solid red";
		}
	}
});
recepts.addEventListener("click", function(e){
	if(e.target.id=="rec_add"){
		var masComp=[];
		var newId,newRec;
		for(var indexMasEnabledComponents=0;indexMasEnabledComponents<masEnabledComponents.length;indexMasEnabledComponents++)
			masComp.push(Runner.findComponentById(masEnabledComponents[indexMasEnabledComponents],current.currentComp,true));
		switch (TYPE)
		{
			case "arch":
			{		
				newId=ClassArchRecept.getLastId()+1;		
				newRec=new ClassArchRecept(rec_name.value,masComp,newId);	
				Runner.addNewRec(newId, newRec);				
				break;
			}
			case "cuiras":
			{		
				newId=ClassCuirassRecept.getLastId()+1;	
				newRec=new ClassCuirassRecept(rec_name.value,masComp,newId);			
				Runner.addNewRec(newId, newRec);
				break;
			}
		}
	}
});
add_component.addEventListener("click", function(e){
	if(e.target.id=="comp_add"){
		var newId,newComp;
		switch (TYPE)
		{
			case "arch":
			{		
				newId=ClassArchComponent.getLastId()+1;	
				newComp=new ClassArchComponent(comp_name.value,koef.value,newId);			
				Runner.addNewComp(newId,newComp);
				break;
			}
			case "cuiras":
			{		
				newId=ClassCuirasComponent.getLastId()+1;	
				newComp=new ClassCuirasComponent(comp_name.value,koef.value,newId);			
				Runner.addNewComp(newId,newComp);
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
			Runner.Main("arch");
			break;
		}
		case 1:{
			Runner.Main("cuiras")
			break;
		}
	}
});