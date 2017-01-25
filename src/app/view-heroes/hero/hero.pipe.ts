import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'subHystory'})
export class SubHistoryPipe implements PipeTransform {
  transform(value: string, length: number): string {
      if(value.length>length) {
          return value.substring(0, length) + '...';
      } 
      return value.substring(0, length);
  }
}