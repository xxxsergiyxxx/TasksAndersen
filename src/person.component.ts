import { PersonService} from './person.service'
export class Person {
  private firstName: string;
  private lastName: string;
  private service: PersonService;
  private text: string;
  private listSurnames: string[];
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
  public getMessage() : string {
    return this.service.getMessage();
  }
  public getText() : string {
    return this.text;
  }
  public getListSurnames() : string [] {
    return this.listSurnames;
  }
}