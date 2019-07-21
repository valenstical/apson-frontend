import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'helpers';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  request<T>(
    endpoint: string,
    params: any,
    method: string,
  ): Observable<T> | any {
    return this.http[method](`${BASE_URL}/${endpoint}`, params);
  }
}
