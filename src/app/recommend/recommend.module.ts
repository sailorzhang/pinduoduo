import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';
import { RecommendContainerComponent } from './components';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    RecommendContainerComponent
  ],
  imports: [
    SharedModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
