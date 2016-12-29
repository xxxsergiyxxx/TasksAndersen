import FormSearchService from './formSearch.service';

export default class Controller {
  public place: string;
  public searchState
  constructor(private service: FormSearchService) {
  }
  public getData() {
    this.service.getData(this.place).then((res: any) =>{
      console.log(res.data);
    });
  }
}