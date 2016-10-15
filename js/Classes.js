function extend(Child, Parent) {
	var F = function() { }
	F.prototype = Parent.prototype
	Child.prototype = new F()
	Child.prototype.constructor = Child
	Child.superclass = Parent.prototype
}
//класс рецепт
function ClassAbstractRecept(receptName, recept, id){
	this._receptName=receptName;
	this._recept=recept;	
	this._id=id;
}

ClassAbstractRecept.prototype.getRecept=function(){
		return this._recept;
}
ClassAbstractRecept.prototype.setRecept=function(recept){
		this._recept=recept;
}
ClassAbstractRecept.prototype.getReceptName=function(){
		return this._receptName;
}
ClassAbstractRecept.prototype.setReceptName=function(receptName){
		this._receptName=receptName;
}
ClassAbstractRecept.prototype.getIdRecept=function(){
		return this._id;
}
//рецепт лука
function ClassArchRecept(receptName,recept){
	ClassAbstractRecept.call(this,receptName,recept);
}
extend(ClassArchRecept, ClassAbstractRecept);
ClassArchRecept.prototype.CalculateArrowSpeed=function()
{
	alert("CalculateArrowSpeed");
	return ;
}
//рецепт кирасы
function ClassCuirassRecept(receptName,recept){
	ClassAbstractRecept.call(this,receptName,recept);
}
extend(ClassCuirassRecept, ClassAbstractRecept);
ClassCuirassRecept.prototype.CalculateArmor=function()
{
	alert("CalculateArmor");
	return ;
}


//класс компонент
function ClassAbstractComponent(componentName, idComponent){
	this._componentName=componentName;
	this._idComponent=idComponent;
}
ClassAbstractComponent.prototype.getComponentName=function(){
	
	return this._componentName;
}
ClassAbstractComponent.prototype.setComponentName=function(componentName){
	
	this._componentName=componentName;
}
ClassAbstractComponent.prototype.getComponentId=function(){
	
	return this._idComponent;
}
//компоненты лука
function ClassArchComponent(componentName, speedIndex, idComponent){
	this._speedIndex=speedIndex;
	ClassAbstractComponent.call(this,componentName,idComponent);
}
extend(ClassArchComponent, ClassAbstractComponent);
ClassArchComponent.prototype.getSpeedIndex=function(){
	
	return this._speedIndex;
}
ClassArchComponent.prototype.setSpeedIndex=function(speedIndex){
	
	this._speedIndex=speedIndex;
}
//компоненты кирасы
function ClassCuirasComponent(componentName, armorIndex, idComponent){
	this._armorIndex=armorIndex;
	ClassAbstractComponent.call(this,componentName,idComponent);
}
extend(ClassCuirasComponent, ClassAbstractComponent);
ClassCuirasComponent.prototype.getArmorIndex=function(){
	
	return this.armorIndex;
}
ClassCuirasComponent.prototype.setArmorIndex=function(armorIndex){
	
	this._armorIndex=armorIndex;
}

