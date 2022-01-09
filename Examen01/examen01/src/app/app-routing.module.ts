import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaPantallaPrincipalComponent} from "./rutas/ruta-pantalla-principal/ruta-pantalla-principal.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";

const routes: Routes = [
  {
    path: 'pantalla-principal',
    component: RutaPantallaPrincipalComponent,
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent,
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent,
  },
  {
    path: '',
    redirectTo: '/pantalla-principal',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
