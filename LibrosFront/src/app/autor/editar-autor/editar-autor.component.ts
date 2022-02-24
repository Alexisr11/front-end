import { Component, OnInit } from '@angular/core';
import { autorDTO, creacionAutorDTO } from '../autor';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {

  constructor() { }

  modelo: autorDTO = { nombre: 'Felipe', fechaNacimiento: new Date(), foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lees.com.co%2Fblog%2Flos-5-escritores-colombianos-mas-representativos%2F&psig=AOvVaw3-a4v8pmMpR_QFHxeQZ0Gp&ust=1645670049283000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCEo8DnlPYCFQAAAAAdAAAAABAJ'}

  ngOnInit(): void {
  }

  guardarCambios(actor: creacionAutorDTO){
    console.log(actor);
  }
}
