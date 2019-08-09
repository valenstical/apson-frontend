import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  RouterEvent,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
} from '@angular/router';
import { BaseComponent } from 'shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent
  implements OnInit, OnDestroy {
  active = false;
  loading = false;
  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    this.subscription.add(
      this.router.events.subscribe(
        (event: RouterEvent): void => {
          this.active = false;
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

  toggleMenu() {
    this.active = !this.active;
  }
}
