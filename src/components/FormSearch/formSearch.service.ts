export default class FormSearchService {
  constructor(private http: ng.IHttpService) {

  }
  public getData(): void {
    const url='http://api.nestoria.co.uk/api?'+
    'country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=51.684183,-3.431481';
    this.http.jsonp(url).then((res: any) =>{
      console.log(res.data.response);
    });
  }
}