import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {WebsocketsService} from "./servicios/websockets/websockets.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  public ngOnInit() {
    //AQUI ESCUCHAMOS LOS EVENTOS
    this.websocketService
      .escucharEventoHola()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.error({error})
          }
        }
      );




  }

  title = 'ejemplo';
  constructor(private readonly websocketService:WebsocketsService
  ) {
  }

  eventoHola() {
    this.websocketService.ejecutarEventoHola()
  }
}
