import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from './navegacion/navegacion.component';



@NgModule({
  declarations: [
    NavegacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavegacionComponent
  ]
})
export class NavegacionModule { }
