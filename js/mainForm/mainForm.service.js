angular.module("mainApp.mainForm").service("mainFormService", ["$http","$q",MainFormService]);
function MainFormService(http, Q){
   var self=this;
   self.validField=validField;
   self.nameAsyn=nameAsyn;

   function nameAsyn(modelValue, viewValue){
      if (!modelValue) {
          return Q.when();
        }
     var def = Q.defer();
     http.get("formData.json").then(function(res){
         if (res.data.indexOf(modelValue) === -1) {
            def.reject();
          } else {
            def.resolve();
          }
     });
     return def.promise;
   }

   function validField(modelValue){
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;
      return !modelValue || EMAIL_REGEXP.test(modelValue);
   }
}