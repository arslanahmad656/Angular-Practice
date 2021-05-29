import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransformer'
})
export class TextTransformerPipe implements PipeTransform {

  transform(
    value: string, 
    transform: 'uppercase' | 'lowercase' = 'lowercase', 
    repeatCount: number = 1, 
    repeat: boolean = false): string {
    
    console.log({
      value, transform, repeatCount, repeat
    })
    
    if (!value) return value;
    if (repeatCount < 1) repeatCount = 1;
    switch (transform) {
      case 'lowercase': value = value.toLowerCase(); break;
      case 'uppercase': value = value.toUpperCase(); break;
    }

    if (repeat) value = value.repeat(repeatCount);
    
    return value;
  }

}
