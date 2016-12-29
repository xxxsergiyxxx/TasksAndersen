import { Search } from './formSearch.types';
export default class FormSearchService {
  public historySearch: Array <Search>;

  constructor(private http: ng.IHttpService) {

  }
  public  pushState(state: Search): void {
    if(this.historySearch.length>10)
      this.historySearch.splice(this.historySearch.length-1,1);
    this.historySearch.unshift
  }
  public getData(place: string): ng.IPromise<any> {
    const url='http://api.nestoria.co.uk/api?'+
    'country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name='+place;
    return this.http.jsonp(url);
  }
}