import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
   id: number;
   title: string;
   link: string;
}

@Component({
   selector: 'app-scrollable-tab',
   templateUrl: './scrollable-tab.component.html',
   styleUrls: ['./scrollable-tab.component.css'],
})
export class ScrollableTabComponent {
   @Input() selectedTabLink: string;
   @Input() menus: TopMenu[];
   @Output() tabSelected = new EventEmitter<TopMenu>();

   constructor() {
      console.log('构造函数');
   }

   handleTabSelecte(index: number): void {
      this.tabSelected.emit(this.menus[index]);
   }
}
