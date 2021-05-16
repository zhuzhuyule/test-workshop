import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transferName'
})
export class TransferNamePipe implements PipeTransform {

  transform(value: string, type: string = ''): string {
    const transferName = value.replace(/([A-Z])/g, '-$1').replace(/^-/, '').replace(/[ -]{2,}/g, '-');
    if (transferName) {
      if (type === 'class') {
        return transferName.split(/ |\-/).map(str => str[0].toUpperCase() + str.slice(1).toLowerCase()).join('');
      }
      return transferName.split(/ |\-/).map(str => str.toLowerCase()).join('-');
    }
    return '';    
  }
}
