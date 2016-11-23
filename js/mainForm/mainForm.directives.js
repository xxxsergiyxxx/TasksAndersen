angular.module("mainApp.mainForm").
  directive('validField', function() {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;
    return {
      require: '?ngModel',
      link: function(scope, elm, attrs, ctrl) {
        if (ctrl) {
            ctrl.$validators.validField = function(modelValue) {
              console.log(ctrl);
              return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          };
        }
      }
    };
});