import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    // banner.module.ts
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent
  ],
})
export class BannerImagenesModule { }
