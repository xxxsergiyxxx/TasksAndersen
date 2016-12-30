import FormSearchService from './formSearch.service';

export default class Controller {
  public place: string;
  constructor(private service: FormSearchService) {
  }
  
  public getData() {
    this.service.getData(this.place).then((res: any) => {
      this.service.response = res.data.response;
      this.service.currentSearch = this.service.getCurrentSearch(this.service.currentUrl, this.service.response);
      this.service.pushSearch(this.service.currentSearch);
      this.service.deffered.resolve(this.service.response.listings);
      this.service.showLoaded = false;
      this.service.totalPages=this.service.response.total_pages;
      }, (res: any) => {
        alert("ssss");
      }
    );
  }
}