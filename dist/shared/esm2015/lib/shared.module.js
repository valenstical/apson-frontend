/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { BusyComponent } from './components/busy/busy.component';
import { SchoolBoxComponent } from './components/school-box/school-box.component';
import { RouterModule } from '@angular/router';
import { SimpleSelectComponent } from './components/simple-select/simple-select.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { AlertComponent } from './components/alert/alert.component';
export class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BackButtonComponent,
                    SubmitButtonComponent,
                    AlertComponent,
                    InputComponent,
                    SelectComponent,
                    SimpleSelectComponent,
                    BusyComponent,
                    SchoolBoxComponent,
                    NotFoundComponent,
                ],
                imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
                exports: [
                    FormsModule,
                    ReactiveFormsModule,
                    BackButtonComponent,
                    SubmitButtonComponent,
                    AlertComponent,
                    InputComponent,
                    SelectComponent,
                    BusyComponent,
                    SimpleSelectComponent,
                    SchoolBoxComponent,
                    NotFoundComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQTZCcEUsTUFBTSxPQUFPLFlBQVk7OztZQTNCeEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztnQkFDdkUsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO2lCQUNsQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJtaXRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3VibWl0LWJ1dHRvbi9zdWJtaXQtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnVzeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idXN5L2J1c3kuY29tcG9uZW50JztcbmltcG9ydCB7IFNjaG9vbEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zY2hvb2wtYm94L3NjaG9vbC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaW1wbGVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2ltcGxlLXNlbGVjdC9zaW1wbGUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYWNrQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JhY2stYnV0dG9uL2JhY2stYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCYWNrQnV0dG9uQ29tcG9uZW50LFxuICAgIFN1Ym1pdEJ1dHRvbkNvbXBvbmVudCxcbiAgICBBbGVydENvbXBvbmVudCxcbiAgICBJbnB1dENvbXBvbmVudCxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgU2ltcGxlU2VsZWN0Q29tcG9uZW50LFxuICAgIEJ1c3lDb21wb25lbnQsXG4gICAgU2Nob29sQm94Q29tcG9uZW50LFxuICAgIE5vdEZvdW5kQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQmFja0J1dHRvbkNvbXBvbmVudCxcbiAgICBTdWJtaXRCdXR0b25Db21wb25lbnQsXG4gICAgQWxlcnRDb21wb25lbnQsXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIEJ1c3lDb21wb25lbnQsXG4gICAgU2ltcGxlU2VsZWN0Q29tcG9uZW50LFxuICAgIFNjaG9vbEJveENvbXBvbmVudCxcbiAgICBOb3RGb3VuZENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG4iXX0=