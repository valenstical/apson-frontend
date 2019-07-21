import { Injectable } from '@angular/core';
import { School } from '../models/school';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private school: BehaviorSubject<School> = new BehaviorSubject(null);

  constructor() {}

  setValue(school: School) {
    this.school.next(school);
  }

  get() {
    return this.school;
  }

  getValue() {
    return this.school.getValue();
  }
}
