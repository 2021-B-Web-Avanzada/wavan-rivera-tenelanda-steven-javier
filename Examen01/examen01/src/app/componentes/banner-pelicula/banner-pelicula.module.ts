import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerPeliculaComponent } from './banner-pelicula/banner-pelicula.component';



@NgModule({
  declarations: [
    BannerPeliculaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerPeliculaComponent
  ]
})
export class BannerPeliculaModule { }
