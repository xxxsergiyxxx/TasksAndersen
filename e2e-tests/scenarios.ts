'use strict';

describe('Steal Mya Admin Application', () => {

  it('should redirect `index.html` to `index.html#!/search', () => {
    browser.get('index.html');
    expect(browser.getTitle()).toEqual('Steal My Admin');
  });

  describe('View: list', () => {
    beforeEach(() => {
      browser.get('index.html#!/');
    });
    const queryField = element(by.model('$ctrl.place'));
    const search_button = $('.search_button'); 
    const location_button = $('.location_button');

    it('should be return list', () =>{
      const placeList = element.all(by.repeater('place in $ctrl.places')); 

      queryField.sendKeys('london');
      search_button.click();
      expect(placeList.count()).toBe(20);
    });

    it('should be return empty list', () =>{ 
      const placeList = element.all(by.repeater('place in $ctrl.places'));   

      queryField.sendKeys('aaaaaaaaaaaaa');
      search_button.click();
      expect(placeList.count()).toBe(0);
    });

    it('should be return history list', () =>{
      const history = element.all(by.repeater('history in $ctrl.service.historySearch'));

      queryField.sendKeys('london');
      search_button.click();
      browser.setLocation('/')
      expect(history.count()).toBe(1);
    });

    it('should be return location  list', () =>{
      const placeList = element.all(by.repeater('place in $ctrl.places'));    
      const location_button = $('.location_button');

      location_button.click();
      expect(placeList.count()).toBe(20);
    });

    it('should be return history list', () =>{
      const placeList = element.all(by.repeater('place in $ctrl.places'));
      const search_link = $('.search-link');

      queryField.sendKeys('london');
      search_button.click();
      browser.setLocation('/')
      search_link.click();
      expect(placeList.count()).toBe(20);
    });

    it('should be return url /search', () =>{
      search_button.click();
      expect(browser.getLocationAbsUrl()).toBe('/search');
    });
  });

});
