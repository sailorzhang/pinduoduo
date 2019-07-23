import {
   Component,
   OnInit,
   Input,
   ChangeDetectionStrategy,
} from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
   selector: 'app-count-down',
   templateUrl: './count-down.component.html',
   styleUrls: ['./count-down.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountDownComponent implements OnInit {
   @Input() startDate = new Date();
   @Input() futureDate: Date;
   countDown$: Observable<string>;
   private _MS_PER_SECOND = 1000;

   constructor() {}

   ngOnInit() {
      console.log(this.futureDate);
      this.countDown$ = interval(this._MS_PER_SECOND).pipe(
         map(
            elapse => this.diffInSec(this.startDate, this.futureDate) - elapse
         ),
         takeWhile(gap => gap >= 0),
         map(sec => ({
            day: Math.floor(sec / 3600 / 24),
            hour: Math.floor((sec / 3600) % 24),
            minute: Math.floor((sec / 60) % 60),
            second: Math.floor(sec % 60),
         })),
         tap(val => console.log(val)),
         map(({ hour, minute, second }) => `${hour}:${minute}:${second}`)
      );
   }

   private diffInSec = (start: Date, future: Date): number => {
      const diff = future.getTime() - start.getTime();
      return Math.floor(diff / this._MS_PER_SECOND);
   };
}
