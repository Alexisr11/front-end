import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { creacionLibrosDTO, librosDTO } from '../libros';

@Component({
  selector: 'app-formulario-libros',
  templateUrl: './formulario-libros.component.html',
  styleUrls: ['./formulario-libros.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: librosDTO;

  @Output()
  OnSubmit: EventEmitter<creacionLibrosDTO> = new EventEmitter<creacionLibrosDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enLibrerias: false,
      fechaLanzamiento: '',
      poster: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }


  changeMarkdown(texto: string){
    this.form.get('resumen').setValue(texto);
  }
  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }
}
