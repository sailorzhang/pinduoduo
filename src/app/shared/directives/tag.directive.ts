import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTag]'
})
export class TagDirective {

  @Input() @HostBinding('style.background-color') bgColor = 'rgb(250, 239, 227)';
  @Input() @HostBinding('style.color') color = 'rgb(202, 81, 106)';
  @Input() @HostBinding('style.font-size') tagSize = '0.8rem';
  @Input() @HostBinding('style.padding') padding = '3px';

  constructor() { }

}
