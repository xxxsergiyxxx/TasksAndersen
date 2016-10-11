document.addEventListener("DOMContentLoaded", function(e)
{
	var btnBook, recBook;
	var nBook,rBook;
	btnBook=document.getElementById("new_book");
	recBook=document.getElementById("rec_book");
	var k=document.getElementById("img_container");
	var finish=document.getElementById("books_container");
	k.addEventListener("dragstart",drag);
	k.addEventListener("drop",drop);
	k.addEventListener("dragover", allowDrop);
	finish.addEventListener("dragstart",drag);
	finish.addEventListener("drop",drop);
	finish.addEventListener("dragover", allowDrop);
	btnBook.addEventListener("click",function(e)
	{
		nBook=new ClassBook();
		nBook.title=document.getElementById("book_name").value;
		nBook.src=document.getElementById("book_src").value;
		nBook.type=document.getElementById("book_type").value;
		nBook.getId(data_book);
		data_book.push(nBook);
		AddBookView(nBook);
	});
	recBook.addEventListener("click", function(e)
	{
		rBook=new Recept();
		rBook.getIncludes();
		rBook.title=document.getElementById("rec_name").value;
		rBook.type=document.getElementById("rec_type").value;		
		rBook.getId(data_recept);
		data_recept.push(rBook);
		AddRecView(rBook);
	});
});
function AddBookView(nBook)
{
	var dive=document.getElementById("img_container");
	dive.innerHTML+='<div draggable="true" class="books_prop" id="'+nBook.type+'_'+nBook.id+'">\n'+
			'<img class="polk_images" src="'+nBook.src+'">\n'+
			'</div>\n';
}
function AddRecView(rBook)
{
	var sel=document.getElementById("select_recept");
	var d="";
	for(var i=0, len=data_recept.length;i<len;i++)
	{
		d+='<option id="'+data_recept[i].type+'_'+data_recept[i].id+'">'+data_recept[i].title+'</option>';
	}
	DeleteBorder();
	sel.innerHTML=d;
}
function allowDrop(ev) 
{
    ev.preventDefault();
}

function drag(e) 
{
	var target;
	if(e.target.parentNode.id!="right_column")
	{
		if(e.target.tagName.toLowerCase() =="img" || e.target.parentNode.tagName.toLowerCase()=="div")
		{
			target=e.target.parentNode;
		}	
		else return;
	}
    e.dataTransfer.setData("text", target.id);
}

function drop(ev) 
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.target.id.toLowerCase()=="img_container"||ev.target.id.toLowerCase()=="books_container")
		ev.target.appendChild(document.getElementById(data));
}
function ClassBook()
{
	this.title=null;
	this.src=null;
	this.type=null;
	this.id=null;	
}
function getId(mas)
{
	var newId=parseInt(mas[mas.length-1].id)+1;
	this.id=newId;
}
ClassBook.prototype.getId=getId;
function Recept()
{
	this.title=null;
	this.type=null;
	this.includes=null;	
	this.id=null;
}
Recept.prototype.getId=getId;
Recept.prototype.getIncludes=function()
{
	this.includes=masBookfind;
};

