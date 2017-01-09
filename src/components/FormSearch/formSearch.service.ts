import { Search } from './formSearch.types';

export default class FormSearchService {
  public historySearch: Array <Search>;
  public currentUrl: string;
  public response: any;
  public currentSearch: Search;
  public deffered: ng.IDeferred <any>
  public showLoaded: boolean = false;
  public place: string;
  public totalPages: number;
  public myAlert: string;

  constructor(private $q: ng.IQService, private http: ng.IHttpService) {
    this.historySearch = []
  }

  public initDefer(): void {
    this.deffered = this.$q.defer();
  }

  public setPlaceUrl(place: string): string {
    this.place = place;
    return 'http://api.nestoria.co.uk/api?' +
            'country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=' + place;
  }
  public setLocationUrl(pointX: number, pointY: number): string {
    return 'http://api.nestoria.co.uk/api?' +
          'country=uk&pretty=1&action=search_listings&encoding=json&' +
          'listing_type=buy&page=1&centre_point=' + pointX + ',' + pointY;
  }
  public pushSearch(state: Search): void {
    this.historySearch.unshift(state);

    if (this.historySearch.length > 10) {
      this.historySearch.splice(this.historySearch.length - 1, 1);
    }
  }

  public getData(url: string): ng.IPromise <any> {
    this.currentUrl=url;
    this.showLoaded = true;
    this.myAlert = 'Loading...';
    return this.http.jsonp(this.currentUrl);
  }

  public loadHistory(index: number): void {
    this.currentSearch = this.historySearch[index];
    this.pushSearch(this.currentSearch);
    this.historySearch.splice(index + 1, 1);
    this.deffered.resolve(this.currentSearch.places);
    this.totalPages = this.currentSearch.totalPages;
    this.place = this.currentSearch.place;

  }

  public viewContent(res: any): void {
    this.response = res.data.response;
    this.currentSearch = this.getCurrentSearch(this.currentUrl, this.response);
    this.pushSearch(this.currentSearch);
    this.showLoaded = false;
    this.totalPages = this.response.total_pages;
    this.deffered.resolve(this.response.listings);
  }

  public getTotalResults(response: any): number {
    return response.total_results;
  }

  public getArrayPlaces(): ng.IPromise <any> {
    return this.deffered.promise;
  }

  public getCurrentSearch(url: string, response: any): Search {
    return {
      url: url,
      count: response.total_results,
      places: response.listings,
      place: this.place,
      totalPages: response.total_pages
    }
  }
}