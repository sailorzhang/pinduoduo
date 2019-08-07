import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent,
  CountDownComponent, FooterComponent, VerticalGridComponent, ProductCardComponent, ProductTitleComponent
} from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective, AvatarDirective } from './directives';
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
    ProductTitleComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    TagDirective,
    AvatarDirective
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
    ProductTitleComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    TagDirective,
    AvatarDirective
  ]
})
export class SharedModule { }
