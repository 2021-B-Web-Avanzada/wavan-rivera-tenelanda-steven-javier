import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketsService} from "../../servicios/websockets/websockets.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit, OnDestroy {
  //CANVA
  @ViewChild("game")
  private gameCanvas?: ElementRef
  private context: any;


  nombre = '';
  salaId = '';
  arregloSuscripciones: Subscription[] = [];
  mensaje = '';
  //posicion inicial objeto 1
  posicion_x = 40;
  posicion_y = 40;
  //posicion inicial objeto 2
  posicion_x2 = 600;
  posicion_y2 = 440;

  arregloMensajes: {
    salaId: number;
    nombre: string;
    mensaje: string;
    posicion: 'izq' | 'der';
  }[] = [];
  posicionesParedesLaberinto: {
    x: number;
    y: number;
  }[] = [{x: 0, y:0},{x:40,y:0},{x:80,y:0},{x:120,y:0},{x:160,y:0},{x:200,y:0},{x:240,y:0},{x:280,y:0},{x:320,y:0},{x:360,y:0},{x:400,y:0}
        ,{x:440,y:0},{x:480,y:0},{x:520,y:0},{x:560,y:0},{x:600,y:0},{x:640,y:0}, {x: 0, y:480},{x:40,y:480},{x:80,y:480},{x:120,y:480}
        ,{x:160,y:480},{x:200,y:480},{x:240,y:480},{x:280,y:480},{x:320,y:480},{x:360,y:480},{x:400,y:480},{x:440,y:480},{x:480,y:480}
        ,{x:520,y:480},{x:560,y:480},{x:600,y:480},{x:640,y:480}, {x:0,y:40},{x:0,y:80},{x:0,y:120},{x:0,y:160},{x:0,y:200},{x:0,y:240}
        ,{x:0,y:280},{x:0,y:320},{x:0,y:360},{x:0,y:400},{x:0,y:440},{x:0,y:480},{x:0,y:40},{x:0,y:40},{x:0,y:40},{x:0,y:40},{x:640,y:40}
        ,{x:640,y:80},{x:640,y:120},{x:640,y:160},{x:640,y:200},{x:640,y:240},{x:640,y:280},{x:640,y:320},{x:640,y:360},{x:640,y:400}
        ,{x:640,y:440},{x:640,y:480},{x:80,y:40},{x:160,y:40},{x:600,y:40},{x:520,y:40},{x:80,y:80},{x:160,y:80},{x:240,y:80},{x:320,y:80}
        ,{x:360,y:80},{x:480,y:40},{x:240,y:120},{x:320,y:120},{x:600,y:120},{x:560,y:120},{x:400,y:120},{x:360,y:120},{x:480,y:80}
        ,{x:80,y:160},{x:120,y:160},{x:200,y:160},{x:240,y:160},{x:280,y:160},{x:320,y:160},{x:480,y:160},{x:600,y:160},{x:120,y:200}
        ,{x:240,y:200},{x:400,y:200},{x:440,y:200},{x:480,y:200},{x:520,y:200},{x:600,y:200},{x:80,y:240},{x:120,y:240},{x:160,y:240}
        ,{x:200,y:240},{x:240,y:240},{x:320,y:240},{x:400,y:240},{x:120,y:280},{x:360,y:280},{x:400,y:280},{x:440,y:280},{x:520,y:280}
        ,{x:560,y:280},{x:600,y:280},{x:80,y:320},{x:120,y:320},{x:160,y:320},{x:240,y:320},{x:280,y:320},{x:320,y:320},{x:360,y:320}
        ,{x:440,y:320},{x:240,y:360},{x:320,y:360},{x:480,y:360},{x:560,y:360},{x:40,y:400},{x:160,y:400},{x:320,y:400},{x:400,y:400}
        ,{x:520,y:400},{x:560,y:400},{x:120,y:440},{x:160,y:440},{x:200,y:440},{x:240,y:440},{x:400,y:440},{x:440,y:440}
  ];


  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly websocketsService: WebsocketsService
  ) {
    console.log('Constructor');
  }
  enviarMensaje(){
    console.log('AGREGUE AL ARREGLO DE MENSAJES')
    this.arregloMensajes.push({
      mensaje:this.mensaje,
      salaId: +this.salaId,
      nombre: this.nombre,
      posicion: 'izq'
    })
    console.log('EJECUTE EVENTO ENVIAR MENSAJE')
    this.websocketsService.ejecutarEventoEnviarMensaje(
      +this.salaId,
      this.nombre,
      this.mensaje
    );
    this.mensaje = '';
  }

  comprobarMovimientoPosible(posicion_x: number,posicion_y: number): boolean{
    for (const posicion of this.posicionesParedesLaberinto){
      if(posicion_x == posicion.x && posicion_y == posicion.y){
        return false;
      }
    }
    return true;
  }


  //Movimiento Jugador
  movimiento(direccion: string){
    console.log('posicion x' + this.posicion_x + '   posicion y' + this.posicion_y)
    switch (direccion) {
      case "izquierda":
        this.posicion_x = this.posicion_x - 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x, this.posicion_y)){
          this.posicion_x = this.posicion_x + 40;
        }
        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE A LA IZQUIERDA")
        break;
      case "derecha":
        this.posicion_x = this.posicion_x + 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x, this.posicion_y)){
          this.posicion_x = this.posicion_x - 40;
        }

        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE A LA DERECHA")
        break;
      case "arriba":
        this.posicion_y = this.posicion_y - 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x, this.posicion_y)){
          this.posicion_y = this.posicion_y + 40;
        }
        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE ARRIBA")
        break;
      case "abajo":
        this.posicion_y = this.posicion_y + 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x, this.posicion_y)){
          this.posicion_y = this.posicion_y - 40;
        }
        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE ABAJO")
        break;
        //JUGADOR2
      case "izquierda2":
        this.posicion_x2 = this.posicion_x2 - 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x2, this.posicion_y2)){
          this.posicion_x2 = this.posicion_x2 + 40;
        }
        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE A LA IZQUIERDA2")
        break;
      case "derecha2":
        this.posicion_x2 = this.posicion_x2 + 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x2, this.posicion_y2)){
          this.posicion_x2 = this.posicion_x2 - 40;
        }
        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE A LA DERECHA2")
        break;
      case "arriba2":
        this.posicion_y2 = this.posicion_y2 - 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x2, this.posicion_y2)){
          this.posicion_y2 = this.posicion_y2 + 40;
        }

        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE ARRIBA2")
        break;
      case "abajo2":
        this.posicion_y2 = this.posicion_y2 + 40;
        if (!this.comprobarMovimientoPosible(this.posicion_x2, this.posicion_y2)){
          this.posicion_y2 = this.posicion_y2 - 40;
        }
        this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2);
        this.websocketsService.ejecutarEventoObtenerPosiciones(
          +this.salaId,
          this.nombre,
          this.posicion_x,
          this.posicion_y,
          this.posicion_x2,
          this.posicion_y2)
        console.log("ENTRE ABAJO2")
        break;
    }

  }

  ngOnInit(): void {
    console.log('Init');
    this.activatedRoute
      .params
      .subscribe({
        next: (parametrosDeRuta) => {
          const salaId = parametrosDeRuta['salaId'];
          const nombre = parametrosDeRuta['nombre'];
          this.nombre = nombre;
          this.salaId = salaId;
          console.log(parametrosDeRuta);
          //enviamos el id de la sala a la logica de las salas
          this.logicaSalas(this.salaId, this.nombre);

          // EVENTO ESCUCHAR POSICION JUGADOR 1
          this.websocketsService
            .escucharEventoObtenerPosiciones()
            .subscribe(
              {
                next:(data: any) => {
                  console.log('Enviaron Posiciones', data);
                  //Actualizar Posiciones
                  this.posicion_x=data.posicion_x;
                  this.posicion_y=data.posicion_y;
                  this.posicion_x2=data.posicion_x2;
                  this.posicion_y2=data.posicion_y2;
                  this.actualizarLaberinto(this.posicion_x, this.posicion_y, this.posicion_x2, this.posicion_y2)
                  console.log('CAMBIE LAS POSICIONES')
                },
                error:(error)=>{
                  console.error({error})
                }
              }
            )

        }
      });
  }

  actualizarLaberinto(posicion_x: number, posicion_y: number, posicion_x2: number, posicion_y2: number ){
    console.log("VOY A LIMPIAR LA PANTALLA")
    this.context.clearRect(
      0,
      0,
      this.gameCanvas?.nativeElement.width,
      this.gameCanvas?.nativeElement.height
    );

    for (const posicion of this.posicionesParedesLaberinto){
      this.context.fillStyle = "#84B6F4"
      this.context.fillRect(posicion.x, posicion.y, 40, 40);
    }
    console.log("VOY A CAMBIAR POSICIONES")
    this.context.fillStyle = "#FDCAE1";
    this.context.fillRect(posicion_x, posicion_y, 40, 40);
    this.context.fillStyle = "#77DD77";
    this.context.fillRect(posicion_x2, posicion_y2, 40, 40);

  }

  public ngAfterViewInit() {
    console.log('ENTRE AL NGAFTERVIEWINIT')
    this.context = this.gameCanvas?.nativeElement.getContext("2d");
    for (const posicion of this.posicionesParedesLaberinto){
      this.context.fillStyle = "#84B6F4"
      this.context.fillRect(posicion.x, posicion.y, 40, 40);
    }
    this.context.fillStyle = "#fdfd96";
    this.context.fillRect(320, 200, 40, 40);
    this.context.fillStyle = "#FDCAE1";
    this.context.fillRect(this.posicion_x, this.posicion_y, 40, 40);
    this.context.fillStyle = "#77DD77";
    this.context.fillRect(this.posicion_x2, this.posicion_y2, 40, 40);
  }

  logicaSalas(salaId: string, nombre: string){

    this.desSuscribirse();
    const respEscucharEventoMensajeSala = this.websocketsService
      .escucharEventoMensajeSala()
      .subscribe(
        {
          next:(data: any) => {
            console.log('Enviaron Mensaje', data);
            console.log('OBTENGO EL NUEVO MENSAJE')
            this.arregloMensajes.push({
              mensaje:data.mensaje,
              salaId: data.salaId,
              nombre: data.nombre,
              posicion: data.nombre === this.nombre ? 'izq' : 'der'
            })
          },
          error:(error)=>{
            console.error({error});
          }
        }
      );

    const respEscucharEventoUnirseSala = this.websocketsService
      .escucharEventoUnirseSala()
      .subscribe(
        {
          next:(data) => {
            console.log('Alguien entro', data);
          },
          error:(error)=>{
            console.error({error});
          }
        }
      );
    this.arregloSuscripciones.push(respEscucharEventoUnirseSala);
    this.arregloSuscripciones.push(respEscucharEventoMensajeSala);
    this.websocketsService.ejecutarEventoUnirseSala(+this.salaId, this.nombre);
  }

  desSuscribirse(){
    this.arregloSuscripciones.forEach(
      (suscripcion)=>{
        suscripcion.unsubscribe();
      }
    );
    this.arregloSuscripciones = [];
  }

  ngOnDestroy() {
    console.log('Destroy')
  }
}
