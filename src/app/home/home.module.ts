import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {
  HomeContainerComponent, HomeDetailComponent,
} from './components';
import { SharedModule } from '../shared/shared.module';
import { token } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [{
    provide: token,
    useValue: 'http://localhost'
  }]
})
export class HomeModule { }
