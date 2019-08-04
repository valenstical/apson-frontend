import { Member } from '../models/member';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
export declare class AuthService {
    private router;
    private httpService;
    member: Subject<Member>;
    url: string;
    constructor(router: Router, httpService: HttpService);
    login(data: any): Observable<any>;
    setMember(member: Member): void;
    getMember(): Member;
    logout(): void;
    private initMember;
    gotoMembers(): void;
    gotoVisitors(): void;
    gotoStudents(): void;
    gotoAdmin(): void;
    isLoggedIn(url: string): boolean;
}
