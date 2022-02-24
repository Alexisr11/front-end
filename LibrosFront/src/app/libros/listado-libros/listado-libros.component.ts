import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  constructor() { }

  libros;

  ngOnInit(): void {
    setTimeout(() => 
      this.libros = [{
        titulo: "Cien Años de Soledad",
        Subtitulo: "",
        Poster: "https://th.bing.com/th/id/R.967280d351efd63bc5c5617c7e10a1e6?rik=49f3jSDdsh2rWQ&pid=ImgRaw&r=0",
        Autor: "Gabriel Garcia Marquez",
        Categoria: "Ficcion",
        Fecha: new Date("2011-01-15")
      },
      {
        titulo: "El Coronel no Tiene quien le escriba",
        Subtitulo: "",
        Poster: "https://th.bing.com/th/id/R.10372864006aa32d3c90658b2c97f80e?rik=ogk9hUYGKzF41g&riu=http%3a%2f%2fstatic.cinemagia.ro%2fimg%2fdb%2fmovie%2f02%2f16%2f07%2fel-coronel-no-tiene-quien-le-escriba-670568l.jpg&ehk=WJq3iaNHmCFNAbpijC5hYd%2bnp3xSa%2buOO41piJ2FYIw%3d&risl=&pid=ImgRaw&r=0",
        Autor: "Gabriel Garcia Marquez",
        Categoria: "Drama",
        Fecha: new Date("2012-01-15")
      },
      {
        titulo: "El Amor en Tiempos de Colera",
        Subtitulo: "",
        Poster: "https://th.bing.com/th/id/R.ab83b6ca3be765331d49c6df0d63e4a8?rik=xeagZOF82EID%2bQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_VseO2IX-IUc%2fTCq5mATC6OI%2fAAAAAAAAB40%2f3sM9D9R8IQU%2fs1600%2famor-en-tiempos-de-colera-2008.jpg&ehk=6pIMfCbDvU4GBgQohbr4XksVN40b4aqGhxKSLgJsD44%3d&risl=&pid=ImgRaw&r=0",
        Autor: "Gabriel Garcia Marquez",
        Categoria: "Romance",
        Fecha: new Date("2012-01-15")
      }], 3000)
    
  }

}
