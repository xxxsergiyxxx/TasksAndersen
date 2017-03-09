import SearchListService from './searchList.service';
import * as uiRouter from 'angular-ui-router';
export default class Controller {
  public places: any;

  constructor(private service: SearchListService, private state: uiRouter.IStateService) {
  }

  public setCurrentPlace(place: any): void {
    this.service.place = place;
    this.state.go('detail');
  }
}