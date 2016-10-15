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
	return {
		ComponentsArch:ComponentsArch,
		ReceptsArch:ReceptsArch
	}
})();