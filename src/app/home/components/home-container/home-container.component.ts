import {
   Component,
   OnInit,
   Inject,
   ChangeDetectionStrategy,
   ChangeDetectorRef,
} from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
   selector: 'app-home-container',
   templateUrl: './home-container.component.html',
   styleUrls: ['./home-container.component.css'],
   //  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
   title = '拼多多';
   topMenus$: Observable<TopMenu[]>;
   selectedTabLink$: Observable<string>;

   constructor(
      private router: Router,
      private homeService: HomeService,
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      this.topMenus$ = this.homeService.getTabs();
      this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
         filter(params => params.has('tabLink')),
         map(params => params.get('tabLink'))
      );
   }

   handleTabSelected(menu: TopMenu): void {
      this.router.navigate(['home', menu.link]);
   }
}
