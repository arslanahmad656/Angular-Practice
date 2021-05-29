import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowTwice]'
})
export class ShowTwiceDirective implements OnInit {
  private count: number;
  private repeat: boolean;
  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef
  ) { 
    this.count = 1;
    this.repeat = false;
  }

  @Input('appShowTwice') set repetitionCount(count: number) {
    console.log('Setting repetion count', count);
    this.count = count <= 0 ? this.count : count;
  }

  @Input('appShowTwiceRepeat') set repeatEnabled(repeat: boolean) {
    console.log('Setting repeat enabled', repeat);
    this.repeat = repeat;
  }

  ngOnInit() {
    if (this.repeat) {
      for (let i = 0; i < this.count; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
    else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
