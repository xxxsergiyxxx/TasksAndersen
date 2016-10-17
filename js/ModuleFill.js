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
	
	var ComponentsCuiras=[];
	ComponentsCuiras.push(new ClassCuirasComponent("Медная пластина",2,0));
	ComponentsCuiras.push(new ClassCuirasComponent("Меховая подстежка",1,1));
	ComponentsCuiras.push(new ClassCuirasComponent("Стальная пластина",3,2));
	ComponentsCuiras.push(new ClassCuirasComponent("Кожаная подстежка",3,3));
	var ReceptsCuiras=[];
ReceptsCuiras.push(new ClassCuirassRecept("Медная кираса с меховой подстежкой",[ComponentsCuiras[0],ComponentsCuiras[1]],0));
	ReceptsCuiras.push(new ClassCuirassRecept("Медная кираса скожаной подстежкой",[ComponentsArch[0],ComponentsArch[3]],1));
	ReceptsCuiras.push(new ClassCuirassRecept("Стальная кираса с меховой подстежкой",[ComponentsCuiras[2],ComponentsCuiras[1]],2));
	ReceptsCuiras.push(new ClassCuirassRecept("Стальная кираса скожаной подстежкой",[ComponentsArch[2],ComponentsArch[3]],1));
	
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
							'<p>Коэффициент скорости <input class="inp" id="koef" type="text"></p>\n'+
							'<input class="inp" type="button" id="comp_add" value="Добавить">\n';
				current.currentHtmlAddRec='<p>Название списка: <input class="inp" id="rec_name" type="text"></p>\n'+
						'<input class="inp" type="button" id="rec_add" value="Добавить">\n'
				return current;
			}
			case "cuiras":
			{
				current.currentRec=ReceptsCuiras;
				current.currentComp=ComponentsCuiras;
				current.currentTypeComp="cuirasComp";
				current.currentTypeRec="cuirasRec";
				current.currentHtmlComponent="";
				current.currentHtmlAddComp='<p>Название компонент: <input class="inp" id="comp_name" type="text"></p>\n'+
							'<p>Коэффициент брони <input class="inp" id="koef" type="text"></p>\n'+
							'<input class="inp" type="button" id="comp_add" value="Добавить">\n';
				current.currentHtmlAddRec='<p>Название списка: <input class="inp" id="rec_name" type="text"></p>\n'+
						'<input class="inp" type="button" id="rec_add" value="Добавить">\n'
				return current;
			}
		}
	}
	return GetLoadData;
})();