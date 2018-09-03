import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys', pure: false})

export class KeysPipe implements PipeTransform {
  transform(value: any) {
    let keys:any=[];
    for (let key in value) {
      for(let kk in value[key]) {
        keys.push({key: kk, value: value[key][kk]});
      }

    }
    return keys;
  }
}
