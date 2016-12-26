beforeEach(module(createFormComponentModule.name, ($provide) => {
        $provide.value('corsEventService', {
            sendToFrameApp: () => {}
        });
        $provide.value('uiModalService', () => {
            return {
                closeAll: () => {}
            };
        });
        $provide.value('userService', {
            companyInfo: () => $q.resolve({requisites: {inn: 1234567890}}),
            isIP: () => $q.resolve(true)
        });
        $provide.value('fileTransfer', {getAcceptedMimeTypes: () => {
            return [];
        }});
    }));
angular.module('services', [])
  .service('sampleSvc', ['$window', 'modalSvc', function($window, modalSvc){
    this.showDialog = function(message, title){
      if(title){
        modalSvc.showModalDialog({
          title: title,
          message: message
        });
      } else {
        $window.alert(message);
      }
    };
  }]);
var mockWindow, mockModalSvc, sampleSvcObj;
beforeEach(function(){
  module(function($provide){
    $provide.service('$window', function()
      this.alert= jasmine.createSpy('alert');
    });
    $provide.service('modalSvc', function(){
      this.showModalDialog = jasmine.createSpy('showModalDialog');
    });
  });
  module('services');
});
beforeEach(inject(function($window, modalSvc, sampleSvc){
  mockWindow=$window;
  mockModalSvc=modalSvc;
  sampleSvcObj=sampleSvc;
}));