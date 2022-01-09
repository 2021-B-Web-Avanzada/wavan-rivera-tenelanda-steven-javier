import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  nombre = 'Steven';
  apellido = 'Rivera';
  mascotas = {
    rocky: {
      edad: 13
    }
  }
  fecha = new Date();
  sueldo = 1000;

  @Input()
  url = 'https://www.google.com';
  @Input()
  urlImagen = 'https://i.blogs.es/6c558d/luna-400mpx/450_1000.jpg';

  @Input()
  color = 'yellow';


  constructor() { }

  ngOnInit(): void {
  }

  ejecutarEventoClick() {
    console.log({mensaje:'click'});
  }
  ejecutarEventoBlur() {
    console.log({mensaje: 'blur'});
  }

}
