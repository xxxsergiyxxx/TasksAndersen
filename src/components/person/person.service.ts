import { Man } from './types';
import { MansData } from './types';
//import * as _ from 'lodash';
import { findIndex } from 'lodash';
export class PersonService {
  public tasks: string[];
  public mansData: Array <Man>;
  private curTask: number;
  private totalTask: number;

  constructor(private http: ng.IHttpService) {
    this.curTask = 5;
  }

  public encryptTask(task: string): string {
    return task + '1';
  }

  public setTaskCount (count: number): void {
    this.totalTask = this.curTask + count;
  }

  public getTotalTask (): number {
    return this.totalTask;
  }

  public searchMan (firstName: string, lastName: string): number {
    return findIndex(this.mansData, {firstName: firstName, lastName: lastName});
  }

  public getTasks(firstName : string, lastName : string): ng.IHttpPromise <any> {
    return this.http.get('json/tasks.json');
  }

  public encrypting(): void {
    this.tasks.forEach((element) => {
      element = this.encryptTask(element);
    })
  }

  public setTasks(tasks: string[]): void {
    this.tasks = tasks;
  }

  public getMessage(man: Man): string {
    return 'Dear ' + man.firstName + ' ' + man.lastName + '. You have ' + man.tasks.length + ' tasks!';
  }

}