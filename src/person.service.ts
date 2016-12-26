export class PersonService {
  private curTask: number;
  private totalTask: number;
  public tasks: string[];
  private http: ng.IHttpService;
  constructor( http: ng.IHttpService ) {
    this.http = http;
    this.curTask = 5;
  }
  public encryptTask( task: string ) {
    return task + '1';
  }
  public setTaskCount (count: number) : void {
    this.totalTask = this.curTask + count;
  }

  public getTotalTask () : number {
    return this.totalTask;
  }

  public getTasks() : void {
    let data;
    this.http.get( 'json/tasks.json' ).then( res => {
      data = res.data;
      this.tasks = data.tasks;
    });
  }
  public encrypting() : void {
    this.tasks.forEach( (element) => {
      element = this.encryptTask(element);
    })
  }
  public setTasks(tasks: string[]) : void {
    this.tasks = tasks;
  }
  public getMessage() : string {
    return 'Message';
  }

}