import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {
  @Input() @HostBinding('style.font-size') appGridItemTitle = '0.5rem';
  @HostBinding('style.grid-area') area = 'title';
  @HostBinding('style.white-space') wrap = 'nowrap';
}
