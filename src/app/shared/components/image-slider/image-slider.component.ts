import {
  Component, OnInit, Input, ViewChild, ElementRef,
  Renderer2, AfterViewInit, OnDestroy
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    // console.log(this.imgSlider);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
        this.getIndex(++this.selectedIndex)
        * this.imgSlider.nativeElement.scrollWidth / this.sliders.length);
    }, this.intervalBySeconds * 1000);
  }

  handleScroll(event: any) {
    const ratio = event.target.scrollLeft / (event.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private getIndex(idx: number): number {
    return idx % this.sliders.length;
  }

}
