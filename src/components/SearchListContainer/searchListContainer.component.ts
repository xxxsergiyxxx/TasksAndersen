import SearchCntainerService from './searchListContainer.service';
import formSearchService from '../FormSearch/formSearch.service';

export default class SearchListComponentController {
  public places: any;
  public formSearchService: formSearchService;

  constructor(public service: SearchCntainerService) {

  }

  public $onInit(): void {
    this.service.viewPages = 20;
    this.service.countNext = -20;
    this.places = this.formSearchService.currentSearch.places;
    this.service.remainingPages = this.formSearchService.totalPages;
    this.service.place = this.formSearchService.place;
    this.service.getViewNextPages();
    this.service.fillArray();
  }

  public nextPages(): void {

    if (this.service.remainingPages) {
      this.service.getViewNextPages();
      this.service.fillArray();
    }
  }

  public previousPages(): void {
    this.service.getViewPreviousPages();
    this.service.fillArray();
  }

  public getPlaces(index: number): void {
    this.service.getPlaces(index).then( (res) => {
      this.places = res.data.response.listings;
    })
  }
}