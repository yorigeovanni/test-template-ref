import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[template]'
})
export class TemplateDirective {

  @Input() template: string;

  constructor(
    public templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
    // console.log(this.templateRef);
  }

}