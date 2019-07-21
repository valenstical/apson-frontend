import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare class HttpService {
    private http;
    constructor(http: HttpClient);
    request<T>(endpoint: string, params: any, method: string): Observable<T> | any;
}
