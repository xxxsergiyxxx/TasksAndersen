import FormSearchService from './formSearch.service';
import * as uiRouter from 'angular-ui-router';
export default class Controller {
  public place: string;
  constructor(private service: FormSearchService, private $state: uiRouter.IStateService) {
  }
  
  public getData(): void {
    this.service.getData(this.place).then(
      (res: any) => {
        this.service.initDefer();
        this.service.viewContent(res);
        this.$state.go('search');
      }, 
      (res: any) => {
        alert("ssss");
      }
    );
  }

  public getHistoryState(index: number): void {
    this.service.initDefer();
    this.service.loadHistory(index);
  }
}