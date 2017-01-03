export default class SearchListService {
  public currentUrl: string;
  public place: string;
  public viewPages: number = 20;
  public remainingPages: number;
  public numberPages: number[] = [];
  public countNext: number = -this.viewPages;

  constructor(private http: ng.IHttpService) {

  }

  public getPlaces(page: number): ng.IPromise <any> {
    this.currentUrl = `http://api.nestoria.co.uk/api?
                       country=uk&pretty=1&action=search_listings
                       &encoding=json&listing_type=buy
                       &page=` + page + `&place_name='` + this.place;
    return this.http.jsonp(this.currentUrl);
  }

  public fillArray() {
    this.numberPages = [];
    for (let i = 0; i < this.viewPages; i++) {
      this.numberPages[i] = (i + 1) + this.countNext;
    }
  }

  public getViewNextPages(): void {
    this.countNext += this.viewPages;

    if (this.remainingPages < this.viewPages) {
      this.viewPages = this.remainingPages;
      this.remainingPages = 0;
    } else {
      this.remainingPages -= this.viewPages;
    }
  }

  public getViewPreviousPages(): void {
    this.countNext -= this.viewPages;
  }
}