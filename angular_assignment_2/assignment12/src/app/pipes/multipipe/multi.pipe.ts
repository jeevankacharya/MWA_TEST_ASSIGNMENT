import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  pipearray = [];

  transform(value: any, ...args: any[]): any {
  for (let i = 0; i < args[0]; i++){
      this.pipearray.push(value);
  }
  return this.pipearray;
  }

}
