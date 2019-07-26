import { Component, OnInit } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from './shared/components';
import { TabItem } from './shared';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { TopMenu, ImageSlider } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedIndex$: Observable<number>;
  ngOnInit(): void {
    this.selectedIndex$ = this.route.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const arr = event.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(tab => this.getSelectedIndex(tab))
    );
  }
  constructor(private route: Router) {
  }

  private getSelectedIndex(tab: string) {
    let index = 0;
    switch (tab) {
      case 'recommend':
        index = 1;
        break;
      case 'category':
        index = 2;
        break;
      case 'chat':
        index = 3;
        break;
      case 'my':
        index = 4;
        break;
      default:
        index = 0;
        break;
    }
    return index;
  }


  tabSelected(tabItem: TabItem) {
    this.route.navigate([tabItem.link]);
  }
}
