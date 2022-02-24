import { Component, OnInit } from '@angular/core';
import { creacionAutorDTO } from '../autor';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.css']
})
export class CrearAutorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(autor: creacionAutorDTO){
    console.log(autor);
  }
}
