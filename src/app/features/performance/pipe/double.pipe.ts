import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  standalone: true
})
export class DoublePipe implements PipeTransform {

  transform(value: number): number {
    console.log('Pipe "double" eseguita'); // Questo aiuta a tracciare quando la pipe viene eseguita
    return value * 2;
  }
}
