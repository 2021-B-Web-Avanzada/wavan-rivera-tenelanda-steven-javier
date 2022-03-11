import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaPantallaPrincipalComponent } from './rutas/ruta-pantalla-principal/ruta-pantalla-principal.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import {BannerPeliculaComponent} from "./componentes/banner-pelicula/banner-pelicula/banner-pelicula.component";
import {BannerPeliculaModule} from "./componentes/banner-pelicula/banner-pelicula.module";
import {NavegacionModule} from "./componentes/navegacion/navegacion.module";

@NgModule({
  declarations: [
    AppComponent,
    RutaPantallaPrincipalComponent,
    RutaNotFoundComponent,
    RutaForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerPeliculaModule,
    NavegacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
