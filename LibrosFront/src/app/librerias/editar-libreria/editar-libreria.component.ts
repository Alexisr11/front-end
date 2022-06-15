import { Component, OnInit } from '@angular/core';
import { creacionLibreriasDTO, libreriasDTO } from '../libreria';

@Component({
  selector: 'app-editar-libreria',
  templateUrl: './editar-libreria.component.html',
  styleUrls: ['./editar-libreria.component.css']
})
export class EditarLibreriaComponent implements OnInit {

  constructor() { }

  modelo: libreriasDTO = {nombre: "Gran Estacion", latitud: 4.446209608852718, longitud: -75.20579338084077};

  ngOnInit(): void {
  }

  guardarCambios(libreria: creacionLibreriasDTO){
    console.log(libreria);
  }
}
