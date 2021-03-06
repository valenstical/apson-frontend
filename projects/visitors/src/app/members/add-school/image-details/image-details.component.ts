import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RequestService, ScriptLoaderService } from 'shared';
import { CloudinaryWidget } from 'helpers';
import { AddSchoolTemplate } from '../add-school-template';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
})
export class ImageDetailsComponent extends AddSchoolTemplate
  implements OnInit, OnDestroy {
  schoolId: string;
  cover: string;
  logo: string;
  gallery = new Set<string>();
  widget: any;
  uploading = {
    cover: false,
    logo: false,
    gallery: false,
  };
  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private scriptLoaderService: ScriptLoaderService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.schoolId = this.school.id;
    this.cover = this.school.cover;
    this.logo = this.school.logo;
    if (this.school.gallery) {
      this.school.gallery.forEach(image => {
        this.gallery.add(image);
      });
    }
  }

  removeGallery(image: string) {
    this.gallery.delete(image);
    this.syncImage('gallery', Array.from(this.gallery).toString());
  }

  syncImage(endpoint: string, url: string) {
    this.subscription.add(
      this.requestService
        .patch(`schools/${this.schoolId}/${endpoint}`, {
          [endpoint]: url,
        })
        .subscribe(_ => {
          this.uploading[endpoint] = false;
          if (endpoint !== 'gallery') {
            this[endpoint] = url;
          }
        }),
    );
  }

  configureWidget(endpoint: string, ratio: number, cropping = true): void {
    this.widget = new CloudinaryWidget(
      (url: string | any) => {
        let image = url;
        if (endpoint === 'gallery') {
          this.gallery.add(image);
          image = Array.from(this.gallery).toString();
        }
        this.syncImage(endpoint, image);
      },
      () => {
        this.uploading[endpoint] = false;
      },
      ratio,
      `school_${endpoint}`,
      cropping,
    );
    this.widget.open();
  }

  changeImage(endpoint: string, ratio: number, cropping = true) {
    this.uploading[endpoint] = true;
    if (!this.widget) {
      this.scriptLoaderService.load('cloudinary').then(_ => {
        this.configureWidget(endpoint, ratio, cropping);
      });
    } else {
      this.configureWidget(endpoint, ratio, cropping);
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
