angular.module("mainApp.mainForm",[]).
         component("myForm",{
            controller:["mainFormService",MainForm],
            templateUrl:"./template/form.template.html"
         })
function MainForm(service){
   var self=this;
   self.setForm=setForm;
   var validsForm=[]
   self.$postLink=setUpValidators;

   function setUpValidators(){
      self.myForm.myForm2.field1.$validators.validField=service.validField;
      self.myForm.myForm3.field1.$validators.validField=service.validField;
      self.myForm.field1.$asyncValidators.nameAsyn=service.nameAsyn;
      //self.myForm.field1.$setValidity('setError',service.validField(self.name));
      //alert("aa");
   }
   function setForm(form){
      //form.field1.$validate();
      //self.myForm.field1.$setAsyncValidity('nameAsyn',service.nameAsyn(self.nameAsyn));
      if(form.$valid){
         alert("Малайдзец");
      }else{
		 alert("Не маладзец");
	  }
   }

}