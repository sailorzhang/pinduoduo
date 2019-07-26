import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';
import { MyContainerComponent } from './components';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    MyContainerComponent
  ],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})
export class MyModule { }
