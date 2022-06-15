import { Component, OnInit } from '@angular/core';
import { creacionLibreriasDTO } from '../libreria';

@Component({
  selector: 'app-crear-libreria',
  templateUrl: './crear-libreria.component.html',
  styleUrls: ['./crear-libreria.component.css']
})
export class CrearLibreriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(libreria: creacionLibreriasDTO){
    console.log(libreria);
  }
}
