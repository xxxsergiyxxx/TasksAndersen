export class PersonService {
  private curTask: number;
  private totalTask: number;
  private tasks: Object;
  private http: ng.IHttpService;
  constructor( http: ng.IHttpService ) {
    this.http = http;
    this.curTask = 5;
  }
  public setTaskCount (count: number): void {
    this.totalTask = this.curTask + count;
  }

  public getTotalTask (): number {
    return this.totalTask;
  }

  public getTasks(): void {
    this.http.get( 'json/tasks.json' ).then( res => {
      this.tasks = res.data ;
    });
  }
  public getMessage():string {
    return 'Message' ;
  }

}