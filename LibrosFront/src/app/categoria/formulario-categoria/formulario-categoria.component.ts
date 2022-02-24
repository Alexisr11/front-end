import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { creacionCategoriaDTO} from '../categoria';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css']
})

export class FormularioCategoriaComponent implements OnInit {
  

  form: FormGroup;

  @Input()
  errores: string[] = [];
  
  @Input()
  modelo: creacionCategoriaDTO;

  @Output()
  onSubmit: EventEmitter<creacionCategoriaDTO> =  new EventEmitter<creacionCategoriaDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
        return 'El campo Nombre es Requerido !!';
    }else if(campo.hasError('minLength')){
        return 'El nombre debe de tener minimo 3 caracteres.!!';
    }

    return '';
  }
}
