import { Component, OnInit } from '@angular/core';
import { librosDTO } from '../libros';

@Component({
  selector: 'app-editar-libros',
  templateUrl: './editar-libros.component.html',
  styleUrls: ['./editar-libros.component.css']
})
export class EditarLibrosComponent implements OnInit {

  constructor() { }

  modelo: librosDTO = {titulo: 'Hasta Que la Plata', enLibrerias: true, fehcaLanzamiento: new Date(), resumen: 'Cualquier cosa', poster: 'https://www.imdb.com/title/tt0815736/'}

  ngOnInit(): void {
  }

}
