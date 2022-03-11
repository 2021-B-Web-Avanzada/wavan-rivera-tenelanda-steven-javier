"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let EventosGateway = class EventosGateway {
    devolverHola(message, socket) {
        socket.broadcast
            .emit('escucharEventoHola', { mensaje: 'Bienvenido' + message.nombre });
        return 'ok';
    }
    unirseSala(message, socket) {
        socket.join(message.salaId);
        const mensajeAEnviar = {
            mensaje: 'Bienvenido' + message.nombre
        };
        socket.broadcast
            .to(message.salaId)
            .emit('escucharEventoUnirseSala', mensajeAEnviar);
        return 'ok';
    }
    ObtenerPosiciones(message, socket) {
        const nuevaPosicion = {
            nombre: message.nombre,
            posicion_x: message.posicion_x,
            posicion_y: message.posicion_y,
            salaId: message.salaId,
            posicion_x2: message.posicion_x2,
            posicion_y2: message.posicion_y2
        };
        socket.broadcast
            .to(message.salaId)
            .emit('escucharEventoObtenerPosiciones', nuevaPosicion);
        return 'ok';
    }
    Ganador(message, socket) {
        const jugadorGanador = {
            salaId: message.salaId,
            jugador_ganador: message.jugador_ganador
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoGanador', jugadorGanador);
        return 'ok';
    }
    enviarMensaje(message, socket) {
        const nuevoMensaje = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId
        };
        socket.broadcast.to(message.salaId)
            .emit('escucharEventoMensajeSala', nuevoMensaje);
        return 'ok';
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('hola'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "devolverHola", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('unirseSala'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "unirseSala", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ObtenerPosiciones'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "ObtenerPosiciones", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('Ganador'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "Ganador", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('enviarMensaje'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "enviarMensaje", null);
EventosGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(8080, {
        cors: {
            origin: '*',
        },
    })
], EventosGateway);
exports.EventosGateway = EventosGateway;
//# sourceMappingURL=eventos.gateway.js.map