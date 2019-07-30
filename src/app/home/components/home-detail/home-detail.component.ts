import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Ad, Product } from 'src/app/shared';

@Component({
   selector: 'app-home-detail',
   templateUrl: './home-detail.component.html',
   styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit, OnDestroy {
   selectedTabLink$: Observable<string>;

   imageSliders$: Observable<ImageSlider[]>;

   channels$: Observable<Channel[]>;

   sub: Subscription;

   ad$: Observable<Ad>;
   products$: Observable<Product[]>;

   constructor(
      private route: ActivatedRoute,
      private homeService: HomeService
   ) {
   }

   ngOnInit() {
      this.selectedTabLink$ = this.route.paramMap.pipe(
         filter(params => params.has('tabLink')),
         map(params => params.get('tabLink'))
      );

      this.sub = this.route.queryParamMap.subscribe(params => {
         console.log('查询参数:', params);
      });

      this.channels$ = this.homeService.getChannels();
      this.imageSliders$ = this.homeService.getBanners();

      this.products$ = this.selectedTabLink$.pipe(
         switchMap(tab => {
            return this.homeService.getProductsByTab(tab);
         }));

      this.ad$ = this.selectedTabLink$.pipe(
         switchMap(tab => {
            return this.homeService.getAdByTab(tab);
         }),
         filter(ads => ads.length > 0),
         map(ads => ads[0])
      );
   }

   ngOnDestroy(): void {
      this.sub.unsubscribe();
   }
}
