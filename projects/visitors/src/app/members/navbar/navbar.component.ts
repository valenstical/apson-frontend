import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member, AuthService, BaseComponent } from 'shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent extends BaseComponent
  implements OnInit, OnDestroy {
  member: Member;

  constructor(public authService: AuthService) {
    super();
  }

  ngOnInit() {
    this.member = this.authService.getMember();
    this.subscription.add(
      this.authService.member.subscribe(member => {
        this.member = member;
      }),
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  logout() {
    this.authService.logout();
  }
}
