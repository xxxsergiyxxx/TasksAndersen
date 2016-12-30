import SearchListService from './searchList.service'
export default class Controller{
  public places: any;
  public place: string;
  public totalPages: number;

  constructor(private service: SearchListService) {
  }

  public $onInit() {
    //this.viewPages this.service
    this.service.place=this.place;
    console.log(this.places);
  }
  
}