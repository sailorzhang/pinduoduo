import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
   selector: 'app-home-detail',
   templateUrl: './home-detail.component.html',
   styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit {
   selectedTabLink$: Observable<string>;

   imageSliders$: Observable<ImageSlider[]>;

   channels$: Observable<Channel[]>;

   constructor(
      private route: ActivatedRoute,
      private homeService: HomeService
   ) {
      this.channels$ = this.homeService.getChannels();
      this.imageSliders$ = this.homeService.getBanners();
   }

   ngOnInit() {
      this.selectedTabLink$ = this.route.paramMap.pipe(
         filter(params => params.has('tabLink')),
         map(params => params.get('tabLink'))
      );

      this.route.queryParamMap.subscribe(params => {
         console.log('查询参数:', params);
      });
   }
}
