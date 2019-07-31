import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent,
  CountDownComponent, FooterComponent, VerticalGridComponent, ProductCardComponent
} from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective } from './directives';
import { AgoPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    FooterComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    TagDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    FooterComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    TagDirective,
  ]
})
export class SharedModule { }
