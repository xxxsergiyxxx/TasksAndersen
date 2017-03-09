import FormSearchService from './formSearch.service';
import * as uiRouter from 'angular-ui-router';

export default class Controller {
  public place: string;

  constructor(private service: FormSearchService, private $state: uiRouter.IStateService) {
  }

  public getData(url: string): void {
    this.service.getData(url).then(
      (res: any) => {
        this.service.initDefer();
        this.service.viewContent(res);
        this.$state.go('search');
      },
      (res: any) => {
        throw new Error('Connection error');
      }
    ).catch((error: Error) => {
      this.service.myAlert = error.message;
    })
  }
  
  public getDataPlace(): void {
    const url: string = this.service.setPlaceUrl(this.place);

    this.getData(url);
  }

  public getDataLocation(): void {
    const url: string = this.service.setLocationUrl(51.684183, -3.431481);

    this.getData(url);
  }

  public getHistoryState(index: number): void {
    this.service.initDefer();
    this.service.loadHistory(index);
  }
}