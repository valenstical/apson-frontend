import { Observable } from 'rxjs';
import { HttpService } from './http.service';
export declare class RequestService {
    private http;
    constructor(http: HttpService);
    updateMember(data: any): Observable<any>;
    updateProfileImage(data: any): Observable<any>;
    registerMember(data: any): Observable<any>;
    requestPayment(paymentType: string): Observable<any>;
    searchSchools(query: any): Observable<any>;
    validatePayment(ref: any): Observable<any>;
    post(endpoint: string, data: any): Observable<any>;
    patch(endpoint: string, data: any): Observable<any>;
    get(endpoint: string, data?: {}): Observable<any>;
}
