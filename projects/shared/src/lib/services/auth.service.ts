import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { MEMBERS_URL, VISITORS_URL, STUDENTS_URL, ADMIN_URL } from 'helpers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  member: Subject<Member>;
  url = MEMBERS_URL;
  constructor(private router: Router, private httpService: HttpService) {}

  login(data: any): Observable<any> {
    return this.httpService.request('members/login', { ...data }, 'post');
  }

  setMember(member: Member): void {
    this.initMember();
    this.member.next(member);
    localStorage.setItem('member', JSON.stringify(member));
  }

  getMember(): Member {
    const member = localStorage.getItem('member');
    if (member) {
      return JSON.parse(member);
    }
    return null;
  }

  logout() {
    this.member = null;
    localStorage.removeItem('member');
    this.router.navigateByUrl('/login');
  }

  private initMember() {
    if (!this.member) {
      this.member = new Subject<Member>();
    }
  }

  public gotoMembers() {
    location.assign(MEMBERS_URL);
  }

  public gotoVisitors() {
    location.assign(VISITORS_URL);
  }

  public gotoStudents() {
    location.assign(STUDENTS_URL);
  }

  public gotoAdmin() {
    location.assign(ADMIN_URL);
  }

  isLoggedIn(url: string): boolean {
    this.url = url;
    const member = this.getMember();
    if (member) {
      this.initMember();
      this.member.next(member);
      return true;
    }
    return false;
  }
}
