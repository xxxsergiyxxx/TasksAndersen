import SearchListService from './searchList.service'
export default class Controller{
  public places: any;
  public place: string;
  public totalPages: number;

  constructor(private service: SearchListService) {
  }

  public $onInit() {
    this.service.remainingPages = this.totalPages;
    this.service.place=this.place;
    this.service.getViewNextPages();
    this.service.fillArray();
    //console.log(this.service.numberPages);
    
    console.log(this.totalPages);
    // console.log(this.service.remainingPages);
  }

  public nextPages(): void {
    this.service.getViewNextPages();
    this.service.fillArray();
  }

  public previousPages(): void {
    this.service.getViewPreviousPages();
    this.service.fillArray();
  }
  
}