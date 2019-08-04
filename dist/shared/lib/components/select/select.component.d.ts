import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class SelectComponent {
    name: string;
    title?: string;
    data: any[];
    formData: FormGroup;
    invalidText?: string;
    disabled: boolean;
    isLoading: boolean;
    whenSelected?: EventEmitter<any>;
    notifyChange(event: any): void;
}
