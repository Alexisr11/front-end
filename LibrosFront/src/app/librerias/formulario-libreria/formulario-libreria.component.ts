import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenadas } from 'src/app/utilidades/mapa/coordenada';
import { creacionLibreriasDTO } from '../libreria';

@Component({
  selector: 'app-formulario-libreria',
  templateUrl: './formulario-libreria.component.html',
  styleUrls: ['./formulario-libreria.component.css'],
})
export class FormularioLibreriaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input()
  modelo: creacionLibreriasDTO;

  @Output()
  guardarCambios: EventEmitter<creacionLibreriasDTO> = new EventEmitter<creacionLibreriasDTO>();

  coordenadasInicial: Coordenadas[] = [];

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],

      latitud: [
        '',
        {
          Validators: [Validators.required]
        }
      ],

      longitud: [
        '',
        {
          Validators: [Validators.required]
        }
      ]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadasInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
    }
  }

  coordenasSeleccionadas(coordenas: Coordenadas){
    this.form.patchValue(coordenas);
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }
}
