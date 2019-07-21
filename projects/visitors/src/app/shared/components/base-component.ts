import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class BaseComponent implements OnDestroy {
  protected subscription = new Subscription();
  isBusy = false;
  isEmpty = false;
  loading = true;
  hideAlert = true;
  show404 = true;
  response = {
    title: '',
    message: [],
    type: '',
  };
  constructor() { }

  protected toggleLoaders(value: boolean): void {
    this.isBusy = value;
    this.hideAlert = value;
  }
  protected showMessage(message: any, title: string, type: string): void {
    this.response.message = message;
    this.response.title = title;
    this.response.type = type;
  }

  private arrayValues(array: any): string | Array<string> {
    if (!Array.isArray(array)) {
      return [];
    }
    const errorGroup = [];
    array.forEach((element: any) => {
      errorGroup.push(Object.values(element));
    });
    return errorGroup;
  }

  protected handleError(err: any): void {
    this.toggleLoaders(false);
    let {
      error: { data, message },
    } = err;
    data = this.arrayValues(data);
    const title = data.length === 0 ? '' : message;
    message = title ? data : message;
    this.showMessage(message, title, 'danger');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  toggleMenu() { }
}
