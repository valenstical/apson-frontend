import { EventEmitter } from '@angular/core';
export declare class SimpleSelectComponent {
    data: any[];
    placeholder: string;
    defaultValue: string;
    whenSelected?: EventEmitter<any>;
    notifyChange(value: any): void;
}
