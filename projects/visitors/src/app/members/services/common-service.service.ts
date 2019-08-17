import { Injectable } from '@angular/core';
import { School } from 'shared';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private pageTitle = 'Dashboard';
  private activeSchool: School;
  private schools: School[] = [];
  private ready = false;

  public fullWidth = false;

  constructor(private router: Router) {}

  public setPageTitle(title: string): void {
    this.pageTitle = title;
  }

  public getPageTitle(): string {
    return this.pageTitle;
  }

  public isReady(): boolean {
    return this.ready;
  }

  public setReady(ready: boolean): void {
    this.ready = ready;
  }

  public findSchool(schoolId: string): School {
    const school = this.schools.find(school => school.id === schoolId);
    return school || this.schools[this.schools.length - 1];
  }
  public setActiveSchool(schoolId: string): void {
    const id = schoolId || localStorage.getItem('activeSchoolId');
    if (id) {
      this.activeSchool = this.findSchool(id);
    }
  }

  public saveActiveSchool(schoolId: string): void {
    localStorage.setItem('activeSchoolId', schoolId);
    this.setReady(false);
  }

  public getActiveSchool(): School {
    return this.activeSchool;
  }

  public isActiveSchool(school: School): boolean {
    return this.activeSchool.id === school.id;
  }

  public setSchools(schools: School[]): void {
    this.schools = schools;
  }

  public getSchools(): School[] {
    return this.schools;
  }
}
