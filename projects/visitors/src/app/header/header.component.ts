import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  active = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.active = false;
    });
  }

  toggleMenu() {
    this.active = !this.active;
  }
}
