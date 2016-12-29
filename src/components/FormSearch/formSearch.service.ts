import { Search } from './formSearch.types';

export default class FormSearchService {
  public historySearch: Array <Search>;
  public newSearchState: Search;
  public currentUrl: string;

  constructor(private http: ng.IHttpService) {
  }

  public $onInit(): void {
    this.historySearch=[];
  }

  public pushSearch(state: Search): void {
    this.historySearch.unshift(state);
    if(this.historySearch.length>10)
      this.historySearch.splice(this.historySearch.length-1,1);   
  }

  public getData(place: string): ng.IPromise <any> {
    this.currentUrl='http://api.nestoria.co.uk/api?'+
    'country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name='+place;
    return this.http.jsonp(this.currentUrl);
  }

  public getTotalResults(response: any): number{
    return response.total_results;
  }

  public getArrayPlaces(response: any): Object[] {
    return response.listings;
  }
}