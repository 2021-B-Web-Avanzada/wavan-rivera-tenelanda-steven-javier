import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-pelicula',
  templateUrl: './banner-pelicula.component.html',
  styleUrls: ['./banner-pelicula.component.scss']
})
export class BannerPeliculaComponent implements OnInit {


  @Input()
  nombrePelicula = '';

  @Input()
  calif = '';

  @Input()
  linkImagen = '';



  constructor() { }

  ngOnInit(): void {
  }

}
