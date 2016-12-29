import FormSearchService from './formSearch.service';

export default class Controller {
  constructor(private service: FormSearchService) {
  }
  public getData() {
    this.service.getData();
  }
}