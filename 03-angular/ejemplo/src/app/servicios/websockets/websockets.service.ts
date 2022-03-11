import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  constructor(private socket: Socket
  ) {
  }

  //EVENTOS DEL LADO DE CLIENTE
  //PARA EMITIR
  //Y EJECUTAR
  ejecutarEventoHola(){
    //EMITIMOS UN EVENTO HOLA
    const resp = this.socket.
    emit(
      'hola', {
      nombre: 'Steven'
    });
    console.log(resp)
  }

  escucharEventoHola(){
    //ESCUCHAMOS EL EVENTO HOLA
    return this.socket
      .fromEvent('escucharEventoHola');
  }


  //OBTENER LA POSICION
  ejecutarEventoObtenerPosiciones(salaId: number, nombre: string, posicion_x: number, posicion_y: number, posicion_x2: number, posicion_y2: number){

    const resp = this.socket
      .emit(
        'ObtenerPosiciones',
        {
                  nombre,
                  salaId,
                  posicion_x,
                  posicion_y,
                  posicion_x2,
                  posicion_y2
              }
      );
    console.log(resp)
  }

  //ESCUCHAR OBTENER POSICION
  escucharEventoObtenerPosiciones(){
    return this.socket
      .fromEvent('escucharEventoObtenerPosiciones')
  }
  //EJECUTAR EVENTO JUGADOR GANADOR
  ejecutarEventoGanador(salaId: string, jugador_ganador: string){
    this.socket
      .emit(
        'Ganador',
        {
          salaId,
          jugador_ganador
        }
      )
  }

  //ESCUCHAR EVENTO JUGADOR GANADOR
  escucharEventoGanador(){
    return this.socket
      .fromEvent('escucharEventoGanador')
  }

  ejecutarEventoUnirseSala(salaId: number, nombre: string) {
    //Emitimos un evento
    this.socket.emit(
      'unirseSala', {
        nombre,
        salaId
      });
  }

  escucharEventoUnirseSala() {
    return this.socket.fromEvent('escucharEventoUnirseSala')
  }

  ejecutarEventoEnviarMensaje(salaId: number, nombre: string, mensaje: string) {
    //Emitimos un evento

    this.socket.emit(
      'enviarMensaje', {
        nombre,
        salaId,
        mensaje
      });
  }

  escucharEventoMensajeSala() {
    return this.socket.fromEvent('escucharEventoMensajeSala')
  }



}
