function ParseId(id){
	var type=id.substring(0,id.lastIndexOf("_"));
	var id=id.substring(id.lastIndexOf("_")+1);
	var obj={type:type, id:id};
	return obj;
}