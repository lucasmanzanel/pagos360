import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fechaFormato'
})
export class FechaPipe implements PipeTransform {
  transform(value: any, formato: string = 'dd/MM/yyyy'): string | null {
    if (value) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(value, formato);
    }
    return '';
  }
}
