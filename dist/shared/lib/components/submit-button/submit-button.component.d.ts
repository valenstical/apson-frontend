import { OnInit, EventEmitter } from '@angular/core';
export declare class SubmitButtonComponent implements OnInit {
    isBusy: boolean;
    text?: string;
    disabled: boolean;
    type: string;
    maxWidth: string;
    btnClick?: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(event: any): void;
}
