import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RutaExamenWebsocketsComponent} from "../../../rutas/ruta-examen-websockets/ruta-examen-websockets.component";


@Component({
  selector: 'app-modal-jugador-ganador',
  templateUrl: './modal-jugador-ganador.component.html',
  styleUrls: ['./modal-jugador-ganador.component.scss']
})
export class ModalJugadorGanadorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public  dialogRef: MatDialogRef<RutaExamenWebsocketsComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  cerrarDialogo(){
    this.dialogRef.close({nombre: 'Steven'})
  }

}
