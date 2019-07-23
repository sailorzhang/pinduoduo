import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
  @Input() appGridItemImage = '2rem';

  @HostBinding('style.grid-area') area = 'image';
  @HostBinding('style.width') width = this.appGridItemImage;
  @HostBinding('style.height') height = this.appGridItemImage;
  @HostBinding('style.object-fit') fit = 'cover';
  constructor() { }


  @HostListener('click', ['$event.target'])
  handlerClick(ev) {
    console.log(ev);
  }
}
