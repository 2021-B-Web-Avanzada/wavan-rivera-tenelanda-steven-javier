import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true;

  arregloUsuarios = [
    {
      id: 1,
      nombre: 'Steven',
      color: '#00BCFF',
      link: 'https://www.facebook.com/',
      linkImagen: 'https://ep01.epimg.net/elpais/imagenes/2021/04/02/album/1617358467_015666_1617366075_noticia_normal.jpg'
    },
    {
      id: 2,
      nombre: 'Javier',
      color: '#00BCFF',
      link: 'https://www.epn.edu.ec/',
      linkImagen: 'https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/pixabay.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner() {
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }

}
