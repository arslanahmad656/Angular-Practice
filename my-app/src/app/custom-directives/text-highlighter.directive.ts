import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextHighlighter]'
})
export class TextHighlighterDirective implements OnInit {
  @Input() backgroundColor: string = "blue";
  @Input() textColor: string = 'white';
  constructor(
    private readonly elementRef: ElementRef
  ) { 
    // empty
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    this.elementRef.nativeElement.style.color = this.textColor;
  }

}
