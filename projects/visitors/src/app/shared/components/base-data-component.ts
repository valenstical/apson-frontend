import { OnInit, OnDestroy } from '@angular/core';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { BaseComponent } from './base-component';
import { selectedFilter } from '../../helpers/utils';

export abstract class BaseDataComponent extends BaseComponent
  implements OnInit, OnDestroy {
  public params: any;
  public debouceTime = 500;
  public dataSize = 0;
  public data = [];

  constructor() {
    super();
    this.params = {
      page: 1,
      size: 1000,
    };
  }

  ngOnInit() {
    this.populateTable();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPopulateTableComplete(data: any, totalRecords: number): void {
    this.loading = false;
    this.data = data;
    this.dataSize = totalRecords;
    this.isEmpty = data.length === 0;
  }

  registerSearchObservables(observableKeyword: string): void {
    this.registerObservables(observableKeyword, 'loading', (value: any) => {
      this.filter(observableKeyword, value);
    });
  }

  handleSearch(key: string, value: string): void {
    this[`${key}$`].next(value);
  }

  registerObservables(
    observableKeyword: string,
    loader: string,
    callback: any,
  ): void {
    this.subscription.add(
      this[`${observableKeyword}$`]
        .pipe(
          tap(_ => {
            this[loader] = true;
          }),
          debounceTime(this.debouceTime),
          tap(_ => {
            this[loader] = false;
          }),
          distinctUntilChanged(),
        )
        .subscribe((value: string) => {
          callback(value);
        }),
    );
  }

  public filter(key: string, value: string): void {
    this.params = selectedFilter(this.params, key, value);
    this.populateTable();
  }

  public abstract populateTable(): void;

  public paginate({ page, size }): void {
    this.params.size = size;
    this.params.page = page;
    this.populateTable();
  }
}
