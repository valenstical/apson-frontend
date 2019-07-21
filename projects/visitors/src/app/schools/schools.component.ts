import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { STATES, SCHOOL_TYPES, scrollIntoView, LGAS } from 'helpers';
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
})
export class SchoolsComponent {
  schoolParams = new Subject();
  states = STATES;
  lgas = [];
  types = SCHOOL_TYPES;

  scrollToResults(element: HTMLElement): void {
    scrollIntoView(element);
  }

  filterByState(state: string): void {
    this.filter('state', state);
    this.lgas = state ? LGAS[state] : [];
  }

  filter(key: string, value: string) {
    this.schoolParams.next({ key, value });
  }
}
