import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
export declare class BaseComponent implements OnDestroy {
    protected subscription: Subscription;
    isBusy: boolean;
    isEmpty: boolean;
    isError: boolean;
    loading: boolean;
    static showMenu: boolean;
    classReference: typeof BaseComponent;
    hideAlert: boolean;
    show404: boolean;
    response: {
        title: string;
        message: any[];
        type: string;
    };
    constructor();
    protected toggleLoaders(value: boolean): void;
    protected showMessage(message: any, title: string, type: string): void;
    private arrayValues;
    protected handleError(err: any): void;
    ngOnDestroy(): void;
    toggleMenu(): void;
}
