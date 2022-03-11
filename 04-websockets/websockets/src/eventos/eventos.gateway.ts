import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import { Server, Socket} from "socket.io";

@WebSocketGateway(
    8080,
    {
        cors:{
            origin: '*',
        },
    })

//ESTO ES DEL LADO DEL SERVIDOR
//AQUI LE LLEGAN LOS EVENTOS 
//AL SERVIDOR Y EL RESPONDE
export class EventosGateway {
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
            message: { nombre: string},
        @ConnectedSocket()
            socket:Socket
    ) {
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {mensaje: 'Bienvenido' + message.nombre});
        return 'ok';
    }

    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
            message: {salaId: string, nombre: string},
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaId);
        const mensajeAEnviar: any = {
          mensaje: 'Bienvenido' + message.nombre
        };
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar
            );
        return 'ok';
    }

    //EVENTO OBTENER POSICION
    @SubscribeMessage('ObtenerPosiciones')
    ObtenerPosiciones(
        @MessageBody()
            message: {
            salaId: string,
            nombre: string,
            posicion_x: number,
            posicion_y: number,
            posicion_x2: number,
            posicion_y2: number},
        @ConnectedSocket()
            socket: Socket
    ) {
        const nuevaPosicion = {
            nombre: message.nombre,
            posicion_x: message.posicion_x,
            posicion_y: message.posicion_y,
            salaId: message.salaId,
            posicion_x2: message.posicion_x2,
            posicion_y2: message.posicion_y2
        } as any;
        socket.broadcast
            .to(message.salaId)
            .emit(
                'escucharEventoObtenerPosiciones',
                nuevaPosicion
            );
        return 'ok';
    }

    //EVENTO OBTENER JUGADOR GANADOR
    @SubscribeMessage('Ganador')
    Ganador(
        @MessageBody()
            message: {salaId: string, jugador_ganador: string},
        @ConnectedSocket()
        socket: Socket
    ){
        const jugadorGanador = {
            salaId: message.salaId,
            jugador_ganador: message.jugador_ganador
        }
        socket.broadcast.to(message.salaId)
            .emit(
                'escucharEventoGanador',
                jugadorGanador
            )
        return 'ok'
    }




    @SubscribeMessage('enviarMensaje')
    enviarMensaje(
        @MessageBody()
            message: {salaId: string, nombre: string, mensaje: string },
        @ConnectedSocket()
        socket: Socket
    ) {
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        } as any;
        socket.broadcast.to(message.salaId)
            .emit(
                'escucharEventoMensajeSala',
                nuevoMensaje
            );
        return 'ok';
    }
}

