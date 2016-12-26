import { PersonService} from './person.service'
export class Person {
  public firstName: string;
  public lastName: string;
  private service: PersonService;
  public text: string;
  public listSurnames: string[];
  constructor(service: PersonService) {
    this.firstName = 'Olgerd';
    this.lastName = 'Olgerdovich';
    this.service = service;
  }
  public getMessage() : string {
    return this.service.getMessage();
  }
}