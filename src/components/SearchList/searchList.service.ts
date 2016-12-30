export default class SearchListService{
  public currentUrl: string;
  public place: string;
  public viewPages: number = 20;
  public remainingPages: number;
  public numberPages: number[] = [];
  constructor(private http: ng.IHttpService){

  }

  public getPlaces(page: number): ng.IPromise <any> {
    this.currentUrl = `http://api.nestoria.co.uk/api?
                       country=uk&pretty=1&action=search_listings
                       &encoding=json&listing_type=buy
                       &page=` + page + `&place_name='` + this.place;
    return this.http.jsonp(this.currentUrl);
  }
  public fillArray() {
    for(let i = 0; i < this.viewPages; i++){
      this.numberPages[i] = i + 1;
    }
  }
  public getViewPages(totalPages: number) {
    if(totalPages < this.viewPages) {
      this.viewPages = totalPages;
      this.remainingPages = 0;
    }
  }
}