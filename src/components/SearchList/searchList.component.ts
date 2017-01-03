import SearchListService from './searchList.service';

export default class Controller {
  public places: any;

  constructor(private service: SearchListService) {
  }

}