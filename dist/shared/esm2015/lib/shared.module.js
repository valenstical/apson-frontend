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
import { PageTransitionComponent } from './components/page-transition/page-transition.component';
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
                    PageTransitionComponent,
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
                    PageTransitionComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQStCakcsTUFBTSxPQUFPLFlBQVk7OztZQTdCeEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDO2dCQUN2RSxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtpQkFDeEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3VibWl0QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N1Ym1pdC1idXR0b24vc3VibWl0LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1c3lDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnVzeS9idXN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hvb2xCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2Nob29sLWJveC9zY2hvb2wtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2ltcGxlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpbXBsZS1zZWxlY3Qvc2ltcGxlLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFja0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2UtdHJhbnNpdGlvbi9wYWdlLXRyYW5zaXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmFja0J1dHRvbkNvbXBvbmVudCxcbiAgICBTdWJtaXRCdXR0b25Db21wb25lbnQsXG4gICAgQWxlcnRDb21wb25lbnQsXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIFNpbXBsZVNlbGVjdENvbXBvbmVudCxcbiAgICBCdXN5Q29tcG9uZW50LFxuICAgIFNjaG9vbEJveENvbXBvbmVudCxcbiAgICBOb3RGb3VuZENvbXBvbmVudCxcbiAgICBQYWdlVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEJhY2tCdXR0b25Db21wb25lbnQsXG4gICAgU3VibWl0QnV0dG9uQ29tcG9uZW50LFxuICAgIEFsZXJ0Q29tcG9uZW50LFxuICAgIElucHV0Q29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBCdXN5Q29tcG9uZW50LFxuICAgIFNpbXBsZVNlbGVjdENvbXBvbmVudCxcbiAgICBTY2hvb2xCb3hDb21wb25lbnQsXG4gICAgTm90Rm91bmRDb21wb25lbnQsXG4gICAgUGFnZVRyYW5zaXRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuIl19