import { OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from './base-component';
export declare abstract class BaseDataComponent extends BaseComponent implements OnInit, OnDestroy {
    params: any;
    debouceTime: number;
    dataSize: number;
    data: any[];
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    onPopulateTableComplete(data: any, totalRecords: number): void;
    registerSearchObservables(observableKeyword: string): void;
    handleSearch(key: string, value: string): void;
    registerObservables(observableKeyword: string, loader: string, callback: any): void;
    filter(key: string, value: string): void;
    abstract populateTable(): void;
    paginate({ page, size }: {
        page: any;
        size: any;
    }): void;
}
