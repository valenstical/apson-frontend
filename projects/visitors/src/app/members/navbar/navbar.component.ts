import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member, AuthService } from 'shared';
import { Dropdown } from 'dropdown';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent extends Dropdown implements OnInit, OnDestroy {
  member: Member;

  constructor(
    public authService: AuthService,
    public commonService: CommonService,
  ) {
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
