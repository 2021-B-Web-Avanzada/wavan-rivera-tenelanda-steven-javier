import { Component, OnInit } from '@angular/core';
import {UserJPHService} from "../../servicios/http/user-jph.service";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  //Definimos un arreglo para los usuarios recibidos
  arreglo: UserJphInterface[] = [];
  //definimos la variable buscarUsuario para que sepa que es un string
  buscarUsuario = '';
  constructor(
    private readonly userJphService: UserJPHService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
      .queryParams;

    parametrosConsulta$
      .subscribe( //AQUI EMPIEZA A EJECUTARSE EL OBSERVABLE
        {
          next: (queryParams)=>{ //Try
            this.buscarUsuario = queryParams['name']
            this.buscarUsuarios();
        },
          error: ()=>{ // Catch

            },
          complete: ()=>{ // Finally

          }
        }
      )



  }
  actualizarParametrosDeConsulta() {
    this.router
      .navigate(
        ['/app', 'usuario'], // armamos la URL /app/usuario
        {
          queryParams: {
            name: this.buscarUsuario // ?name=Adrian
          }
        }
      );
  }

  buscarUsuarios(){
    this.userJphService
      .buscarTodos({name: this.buscarUsuario})
      .subscribe( {
          next: (datos: UserJphInterface[]) => { // try then
            this.arreglo = datos;
            this.buscarUsuario = '';
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  gestionarUsuario(idUsuario:number) {
    const ruta = ['/app', 'usuario', idUsuario];  //  /app/usuario/1
    this.router.navigate(ruta);
  }
}














