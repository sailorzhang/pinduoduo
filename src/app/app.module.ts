import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule, ParamInterceptor } from './home';
import { registerLocaleData } from '@angular/common';
// import { ScrollableTabComponent, HorizontalGridComponent, ImageSliderComponent } from './components';
import localeZh from '@angular/common/locales/zh-Hans';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { NotificationInterceptor } from './home/interceptors/notification.interceptor';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      HomeModule,
      RecommendModule,
      MyModule,
      HttpClientModule,
   ],
   providers: [
      {
         provide: LOCALE_ID,
         useValue: 'zh-Hans'
      }, {
         provide: HTTP_INTERCEPTORS,
         useClass: ParamInterceptor,
         multi: true
      }, {
         provide: HTTP_INTERCEPTORS,
         useClass: NotificationInterceptor,
         multi: true
      }],
   bootstrap: [AppComponent],
})
export class AppModule {
   constructor() {
      registerLocaleData(localeZh, 'zh');
   }
}
