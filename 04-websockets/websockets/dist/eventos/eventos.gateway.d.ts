import { Socket } from "socket.io";
export declare class EventosGateway {
    devolverHola(message: {
        nombre: string;
    }, socket: Socket): string;
    unirseSala(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): string;
    ObtenerPosiciones(message: {
        salaId: string;
        nombre: string;
        posicion_x: number;
        posicion_y: number;
        posicion_x2: number;
        posicion_y2: number;
    }, socket: Socket): string;
    Ganador(message: {
        salaId: string;
        jugador_ganador: string;
    }, socket: Socket): string;
    enviarMensaje(message: {
        salaId: string;
        nombre: string;
        mensaje: string;
    }, socket: Socket): string;
}
