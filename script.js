var data_book,data_recept;
var masBookfind=[];
function DeleteBorder()
{
	var imges=document.getElementById("img_container");
	for(var i=0,len=imges.childNodes.length;i<len;i++)
	{
		if(imges.childNodes[i].nodeName.toLowerCase()=="div")
		{
			imges.childNodes[i].style.backgroundColor="";
		}
	}
}
document.addEventListener("DOMContentLoaded", function(e)
{
	function StyleImages(elem,nameStyle,value, flag)//функция задания стиля
	{
		if(flag)
		{
			elem.style[nameStyle]=value;
		}
		else
			elseelemStyle=null;
	}
	var masBookReferat=[];//выбранные рефераты
	function ToServer(elem,url,func)
	{
		var dive=document.getElementById(elem);
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4) return;
			if (xhr.status != 200) 
			{
			   alert('Ћшибка ' + xhr.status + ': ' + xhr.statusText);
			   return;
			}
			data=JSON.parse(xhr.responseText);
			dive.innerHTML=func(data);
		}
		xhr.send();
	}
	function ParserId(id)//парсинг id на id и тип, передаю id
	{
		var type=id.substring(0,id.lastIndexOf("_"));
		var id=id.substring(id.lastIndexOf("_")+1);
		var obj={type:type, id:id};
		return obj;
	}
	function FindRecept(elem)//сравнение массива нажатых картинок с массивом рецептов
	{
		var d=""
		var flag;
		//alert(data_recept[0].includes.indexOf);
		for(var i=0,len=data_recept.length;i<len;i++)//проходим по массиву рецептов
		{
			flag=true;
			for(var j=0,len1=masBookfind.length;j<len1;j++)//выбранные картинки
			{
				
				if(data_recept[i].includes.indexOf(masBookfind[j])==-1)
				{
					flag=false;
					break;
				}
			}
			if(flag)
				d+='<option id="'+data.recept[i].type+'_'+data.recept[i].id+'">'+data.recept[i].title+'</option>';
		}
		elem.innerHTML=d;
	}
	var k=document.getElementById("img_container");
	ToServer("img_container","vote",function(data)
	{
		data_book=data.books;//массив книг	
		var d="";
		for(var i=0, len=data_book.length;i<len;i++)
		{
			d+='<div draggable="true" class="books_prop" id="'+data.books[i].type+'_'+data.books[i].id+'">\n'+
			'<img class="polk_images" src="'+data.books[i].src+'">\n'+
			'</div>\n';
		}
		return d;
	});
	ToServer("select_recept","recept",function(data)
	{
		data_recept=data.recept;//массив рецептов
		var d="";
		for(var i=0, len=data_recept.length;i<len;i++)
		{
			d+='<option id="'+data_recept[i].type+'_'+data_recept[i].id+'">'+data_recept[i].title+'</option>';
		}
		return d;
	});
	var listBook=document.getElementById("select_recept");
	k.addEventListener("click",function(e)//нажатие на картинку
	{
		var target;
		var obj;
		if(e.target.nodeName.toLowerCase()=="img")
		{
			target=e.target;
			obj=ParserId(target.parentNode.id);
			if(target.parentNode.style.backgroundColor!="")//нажата второй раз
			{
				var delel=masBookfind.indexOf(obj.id);
				if(delel!=-1)
				{
					masBookfind.splice(delel,1);
					FindRecept(listBook);
				}
				StyleImages(target.parentNode,"backgroundColor",null,false);
				//alert(target.parentNode.id);
			}
			else//если нажата первый раз
			{
				StyleImages(target.parentNode,"backgroundColor","blue",true);
				if(masBookfind.indexOf(obj.id)==-1)
				{
					masBookfind.push(obj.id);
				}
				FindRecept(listBook);
			}
		}
	});
	var rec=document.getElementById("right_column");
	rec.addEventListener("click",function(e)
	{
		var target;
		var obj;
		if(e.target.nodeName.toLowerCase()=="option")
		{
			masBookfind=null;
			masBookfind=[];
			target=e.target;
			obj=ParserId(target.id);
			DeleteBorder();
			for(var i=0,len=data_recept.length;i<len;i++)
			{
				if(data_recept[i].id==obj.id)
				{
					for(var j=0,len1=data_recept[i].includes.length;j<len1;j++)
						for(var k=0,len2=data_book.length;k<len2;k++)
						{
							if(data_recept[i].includes[j]==data_book[k].id)
							{
								masBookfind.push(data_book[k].id);
								var book_sel=document.getElementById(data_book[k].type+"_"+data_book[k].id);
								StyleImages(book_sel,"backgroundColor","blue",true);
							}
						}
					break;
				}
			}
		}
	});
	var finish=document.getElementById("books_container");
	function RefMasCount()//проверка наличия нужного списка литературы
	{
		var masSelRec=[]
		var flag;
		var sels=document.getElementById("selected_recepts");
		var d="";
		for(var i=0, len=data_recept.length;i<len;i++)
		{
			flag=false;
			if(data_recept[i].includes.length<=masBookReferat.length)
			{
				for(var j=0;j<data_recept[i].includes.length;j++)
				{
					for(var k=0;k<masBookReferat.length;k++)
					{
						if(data_recept[i].includes[j]==masBookReferat[k])
						{
							flag=true;
							break;
						}
						else
						{
							flag=false;
						}
					}
				}
			}
			if(flag)
			{
				d+='<li>'+data_recept[i].title+'</li>\n';
			}				
		}
		sels.innerHTML=d;
	}
	finish.addEventListener("drop",function(e)
	{
		var obj=ParserId(e.dataTransfer.getData("text"));
		var elem=document.getElementById(e.dataTransfer.getData("text"));
		elem.style.backgroundColor="";
		masBookReferat.push(obj.id);
		RefMasCount();
		//alert(masBookReferat);
	});
	var start=document.getElementById("img_container");
	start.addEventListener("drop",function(e)
	{
		var obj=ParserId(e.dataTransfer.getData("text"));
		var search=masBookReferat.indexOf(obj.id);
		//alert(e.dataTransfer.getData("text"));
		if(search>-1)
		{
			masBookReferat.splice(search,1);
			RefMasCount();
		}
	});
});

