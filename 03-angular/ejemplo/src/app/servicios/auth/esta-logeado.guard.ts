import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class EstaLogeadoGuard implements CanActivate{

  // Inyeccion de dependencias
  constructor(
    private readonly _autService:AuthService,
    private readonly _router:Router,
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._autService.estaLogeado) {
      this._router.navigate(['/forbidden'])
    }
    return this._autService.estaLogeado // boolean
  }
}
