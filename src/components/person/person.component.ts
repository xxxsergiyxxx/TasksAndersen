import { PersonService} from './person.service'
import { Man, MansData } from './types';

export class Person {
  public firstName: string;
  public lastName: string;
  public message: string;
  public showTasks : boolean;
  public listSurnames: string[];
  private currentMan: number;
  constructor(private service: PersonService ) {
  }

  public $onInit(): void {
    this.showTasks = false;
  }

  public getMessage(): void {
    this.message = this.service.getMessage(this.service.mansData[this.currentMan]);
  }

  public getTasks(): void {
    const personService: PersonService = this.service;
    
    personService.getTasks(this.firstName, this.lastName).then((res: MansData) => {
      personService.mansData = res.data;
      this.currentMan = personService.searchMan(this.firstName, this.lastName );
      personService.tasks = personService.mansData[this.currentMan].tasks;
      this.showTasks = true;
    }
  )}
}