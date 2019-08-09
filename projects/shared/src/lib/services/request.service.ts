import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cacheable } from 'ngx-cacheable';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpService) {}

  updateMember(data: any): Observable<any> {
    return this.http.request('members', { ...data }, 'patch');
  }

  updateProfileImage(data: any): Observable<any> {
    return this.http.request('members/image', { ...data }, 'patch');
  }

  registerMember(data: any): Observable<any> {
    return this.http.request('members', { ...data }, 'post');
  }
  requestPayment(paymentType: string): Observable<any> {
    return this.http.request(
      'payments/request',
      { params: { paymentType } },
      'get',
    );
  }

  @Cacheable({
    maxCacheCount: 1000,
  })
  searchSchools(query: any): Observable<any> {
    return this.get('schools', query);
  }

  @Cacheable({
    maxCacheCount: 1000,
  })
  getSchool(id: number): Observable<any> {
    return this.get(`schools/${id}`);
  }

  validatePayment(ref: any): Observable<any> {
    return this.http.request('payments', { ref }, 'post');
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.http.request(endpoint, { ...data }, 'post');
  }

  patch(endpoint: string, data: any): Observable<any> {
    return this.http.request(endpoint, { ...data }, 'patch');
  }
  get(endpoint: string, data = {}): Observable<any> {
    return this.http.request(endpoint, { params: data }, 'get');
  }
}
