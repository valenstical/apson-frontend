import { OnInit, OnDestroy } from '@angular/core';
import { School } from '../../models/school';
import { RequestService } from '../../services/request.service';
import { Subject } from 'rxjs';
import { BaseDataComponent } from '../base-data-component';
export declare class SchoolBoxComponent extends BaseDataComponent implements OnInit, OnDestroy {
    private requestService;
    schools: School[];
    schoolParams: Subject<{}>;
    size: number;
    constructor(requestService: RequestService);
    ngOnInit(): void;
    private setSchoolData;
    private initFilterSubscription;
    populateTable(): void;
    ngOnDestroy(): void;
}
