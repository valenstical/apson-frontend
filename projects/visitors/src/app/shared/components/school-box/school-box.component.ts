import { Component, Input, OnInit } from '@angular/core';
import { School } from '../../models/school';
import { RequestService } from '../../services/request.service';
import { Subject } from 'rxjs';
import { BaseDataComponent } from '../base-data-component';
import { selectedFilter } from '../../../helpers/utils';

@Component({
  selector: 'app-school-box',
  templateUrl: './school-box.component.html',
})
export class SchoolBoxComponent extends BaseDataComponent implements OnInit {
  schools: School[];
  @Input() schoolParams = new Subject();
  @Input() size = 6;

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit(): void {
    this.params.size = this.size;
    super.ngOnInit();
    this.subscription.add(
      this.schoolParams.subscribe(({ key, value }) => {
        if (key === 'state' && this.params.lga) {
          delete this.params.lga;
        }
        this.params = selectedFilter(this.params, key, value);
        this.populateTable();
      }),
    );
  }

  populateTable() {
    this.loading = true;
    this.schools = [];
    this.subscription.add(
      this.requestService.searchSchools(this.params).subscribe(
        response => {
          this.loading = false;
          this.schools = response.data.result;
          this.isEmpty = this.schools.length === 0;
        },
        _ => {
          this.loading = false;
          this.isEmpty = true;
        },
      ),
    );
  }
}
