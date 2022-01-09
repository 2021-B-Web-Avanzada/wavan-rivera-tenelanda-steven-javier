import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-pantalla-principal',
  templateUrl: './ruta-pantalla-principal.component.html',
  styleUrls: ['./ruta-pantalla-principal.component.scss']
})
export class RutaPantallaPrincipalComponent implements OnInit {

  arregloNavegacion = [
    {
      titulo: 'Inicio',
      icono: 'fas fa-home',
      flecha: 'fas fa-caret-up'
    },
    {
      titulo: 'Peliculas',
      icono: 'fas fa-laptop',
      flecha: 'fas fa-caret-up'
    },
    {
      titulo: 'Series',
      icono: 'fas fa-video',
      flecha: 'fas fa-caret-up'
    },
    {
      titulo: 'Doramas',
      icono: 'fas fa-play',
      flecha: 'fas fa-caret-up'
    },
    {
      titulo: 'Animes',
      icono: 'fas fa-medal',
      flecha: 'fas fa-caret-up'
    },
    {
      titulo: 'Generos',
      icono: 'fas fa-list',
      flecha: 'fas fa-caret-up'
    },
    {
      titulo: 'Año',
      icono: 'fas fa-link',
      flecha: 'fas fa-caret-up'
    },
    {
      titulo: 'Paginas Afiliadas',
      icono: 'far fa-laugh-beam',
      flecha: 'fas fa-caret-up'
    }
  ]

  arregloPeliculas = [
    {
      id: 1,
      nombre_pelicula: 'Perseguida (2019)',
      calificacion: '6.5/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/vFbdJeMeTCcZF6BOxIH6Z77MuMx.jpg'
    },
    {
      id: 2,
      nombre_pelicula: 'Equipo foca (2021)',
      calificacion: '6.8/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/yPZ3I27oeSm4zVesgMxXlhW8GDe.jpg'
    },
    {
      id: 3,
      nombre_pelicula: 'El bar de las grandes esperanzas (2021)',
      calificacion: '7/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/qQriRfDfR9a2agLybu58T45yKRB.jpg'
    },
    {
      id: 4,
      nombre_pelicula: 'Cazafantasmas: Más allá (2021)',
      calificacion: '7.2/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/yBlHh4BNiGYgfBTAFi8XONfseN8.jpg'
    },
    {
      id: 5,
      nombre_pelicula: 'Detective Conan 23 : El puño de Zafiro Azul (2019)',
      calificacion: '6/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/oZBm9FR8L8w2VYYD8DqC9PKTeOZ.jpg'
    },
    {
      id: 6,
      nombre_pelicula: 'Harry Potter 20º Aniversario: Regreso a Hogwarts (2022)',
      calificacion: '8.5/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/eEqy4buuj4hJfXvMQiwpl6GJzY9.jpg'
    },
    {
      id: 7,
      nombre_pelicula: 'No mires arriba (2021)',
      calificacion: '7.3/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/qsI7AEaq7qr5h3z5dnG3QIS13Yk.jpg'
    },
    {
      id: 8,
      nombre_pelicula: 'Antlers: Criatura oscura (2021)',
      calificacion: '6.5/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/ht9BZCnIjVPMO20CSlnvPBR5h3J.jpg'
    },
    {
      id: 9,
      nombre_pelicula: 'Encanto 2021 (2021)',
      calificacion: '7.5/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/zAC6fCnaOHMpPFpOpngTSmTDnLK.jpg'
    },
    {
      id: 10,
      nombre_pelicula: 'Matrix Resurrecciones (2021)',
      calificacion: '7.6/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/gjpM7NNfI5memp40mwqF1zxlLfz.jpg'
    },
    {
      id: 11,
      nombre_pelicula: 'Pokémon 11 : Giratina y el defensor de los cielos (2008)',
      calificacion: '6.7/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/4aClfJ4n7w6EybPzJcUV2DotD8x.jpg'
    },
    {
      id: 12,
      nombre_pelicula: 'Pokémon 5: Héroes Pokémon: Latios y Latias (2002)',
      calificacion: '6.5/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/w3u1GuOAZBTt98SDYLXJxadPsk5.jpg'
    },
    {
      id: 13,
      nombre_pelicula: 'Pokémon 4 Siempre: Celebi, La Voz del Bosque (2001))',
      calificacion: '6.4/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/b8rziYaLLPd8SamzLJlobmhj5rE.jpg'
    },
    {
      id: 14,
      nombre_pelicula: 'Pokémon: la película (1998)',
      calificacion: '6.9/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/aeskMWlroIsPR9AllXLW2H6Gev0.jpg'
    },
    {
      id: 15,
      nombre_pelicula: 'Dune (2021)',
      calificacion: '8/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg'
    },
    {
      id: 16,
      nombre_pelicula: 'Matrix Revolutions (2003)',
      calificacion: '6.7/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/3OoMZCbQzKVhEWxezrdFdsg7ZXm.jpg'
    },
    {
      id: 17,
      nombre_pelicula: 'Spider-Man 3 (2007)',
      calificacion: '6.3/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/wTdjrO0GG1OnpyWszEF6INjp3ZZ.jpg'
    },
    {
      id: 18,
      nombre_pelicula: 'Spider-Man 2 (2004)',
      calificacion: '7.2/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/tGYrkVuskQKyRZ9WRS6wPTPBJpm.jpg'
    },
    {
      id: 19,
      nombre_pelicula: 'Imperdonable (2021)',
      calificacion: '7.6/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/qpZUU24mIn1IQGwovqEUT0AjGj2.jpg'
    },
    {
      id: 20,
      nombre_pelicula: 'Generación Y (2020)',
      calificacion: '5.8/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/hPfCHs77qlsCTvrILolIbh94tv5.jpg'
    },
    {
      id: 21,
      nombre_pelicula: 'Encounter (2021)',
      calificacion: '5/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/m8FbbKowTcud7r1JPz95qFU8z2H.jpg'
    },
    {
      id: 22,
      nombre_pelicula: 'Zona 414 (2021)',
      calificacion: '5.6/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/wIm5S6Blkb0qDMTGVu80VWSrQV1.jpg'
    },
    {
      id: 23,
      nombre_pelicula: 'Clifford, el gran perro rojo (2021)',
      calificacion: '7.6/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/kW5JBtCGnIwBS1SD4sMXu8gee4U.jpg'
    },
    {
      id: 24,
      nombre_pelicula: 'Quédate conmigo, Doraemon 2 (2020)',
      calificacion: '7.6/10',
      link_imagen: 'https://image.tmdb.org/t/p/w300/pGtjmJpYUO556JIJHl0TFVeb5wd.jpg'
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
