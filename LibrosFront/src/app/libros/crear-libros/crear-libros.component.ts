import { Component, OnInit } from '@angular/core';
import { creacionLibrosDTO } from '../libros';

@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css']
})
export class CrearLibrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(libro: creacionLibrosDTO){
    console.log(libro);
  }
}
