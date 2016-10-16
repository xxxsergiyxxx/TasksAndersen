var ReceptCollection=(function (){
	'use strict'
	var ComponentsArch=[];
	ComponentsArch.push(new ClassArchComponent("Кленовая рукоядь",2,0));
	ComponentsArch.push(new ClassArchComponent("Плечи из фанеры",1,1));
	ComponentsArch.push(new ClassArchComponent("Тетива из олиэтилентерефталата",3,2));
	ComponentsArch.push(new ClassArchComponent("Дубовая рукоядь",3,3));
	ComponentsArch.push(new ClassArchComponent("Плечи из слоновой кости",4,4));
	ComponentsArch.push(new ClassArchComponent("Тетива из кевлара",4,5));
	var ReceptsArch=[];
	ReceptsArch.push(new ClassArchRecept("Кленовый лук с фанерными плечами и тетивой из олиэтилентерефталата",[ComponentsArch[0],ComponentsArch[1],ComponentsArch[2]],0));
	ReceptsArch.push(new ClassArchRecept("Кленовый лук с плечами из слоновой кости и тетивой из олиэтилентерефталата",[ComponentsArch[0],ComponentsArch[4],ComponentsArch[2]],1));
	ReceptsArch.push(new ClassArchRecept("Кленовый лук с фанерными плечами и тетивой из кевлара",[ComponentsArch[0],ComponentsArch[1],ComponentsArch[5]],2));
	ReceptsArch.push(new ClassArchRecept("Кленовый лук с плечами из слоновой кости и тетивой из кевлара",[ComponentsArch[0],ComponentsArch[4],ComponentsArch[5]],3));
	
	ReceptsArch.push(new ClassArchRecept("Дубовый лук с фанерными плечами и тетивой из олиэтилентерефталата",[ComponentsArch[3],ComponentsArch[1],ComponentsArch[2]],4));
	ReceptsArch.push(new ClassArchRecept("Дубовый лук с плечами из слоновой кости и тетивой из олиэтилентерефталата",[ComponentsArch[3],ComponentsArch[4],ComponentsArch[2]],5));
	ReceptsArch.push(new ClassArchRecept("Дубовый лук с фанерными плечами и тетивой из кевлара",[ComponentsArch[3],ComponentsArch[1],ComponentsArch[5]],6));
	ReceptsArch.push(new ClassArchRecept("Дубовый лук с плечами из слоновой кости и тетивой из кевлара",[ComponentsArch[3],ComponentsArch[4],ComponentsArch[5]],7));
	function GetLoadData(type){
		var current={};
		switch (type)
		{
			case "arch":
			{
				current.currentRec=ReceptsArch;
				current.currentComp=ComponentsArch;
				current.currentTypeComp="archComp";
				current.currentTypeRec="archRec";
				current.currentHtmlComponent="";
				current.currentHtmlAddComp='<p>Название компонент: <input class="inp" id="comp_name" type="text"></p>\n'+
							'<p>Коэффициент скорости <input class="inp" id="book_src" type="text"></p>\n'+
							'<input class="inp" type="button" id="new_book" value="Добавить">\n';
				current.currentHtmlAddRec='<p>Название списка: <input class="inp" id="rec_name" type="text"></p>\n'+
						'<p>Тип списка<input class="inp" id="rec_type" type="text" ></p>\n'+
						'<input class="inp" type="button" id="rec_add" value="Добавить">\n'
				return current;
			}
		}
	}
	return GetLoadData;
})();