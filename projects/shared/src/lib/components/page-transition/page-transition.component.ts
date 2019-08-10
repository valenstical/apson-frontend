import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  Router,
  RouterEvent,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
} from '@angular/router';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'lib-page-transition',
  templateUrl: './page-transition.component.html',
})
export class PageTransitionComponent extends BaseComponent
  implements OnInit, OnDestroy {
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter();

  loading = false;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    this.subscription.add(
      this.router.events.subscribe(
        (event: RouterEvent): void => {
          BaseComponent.showMenu = false;
          if (event instanceof RouteConfigLoadStart) {
            this.loading = true;
          } else if (event instanceof RouteConfigLoadEnd) {
            this.loading = false;
          }
        },
      ),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
