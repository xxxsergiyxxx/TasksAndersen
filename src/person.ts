import { PersonService} from './person.service'
export class Person {
  private firstName: string;
  private lastName: string;
  private service: PersonService;
  constructor(service: PersonService) {
    this.firstName = 'Olgerd';
    this.lastName = 'Olgerdovich';
    this.service = service;
  }
  public getName() : string {
    return this.firstName;
  }
  public getLastName() : string {
    return this.lastName;
  }
  public getMessage(): void {
    this.service.getMessage();
  }
}