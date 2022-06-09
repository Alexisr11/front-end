import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { autorDTO, creacionAutorDTO } from '../autor';

@Component({
  selector: 'app-formulario-autores',
  templateUrl: './formulario-autores.component.html',
  styleUrls: ['./formulario-autores.component.css']
})
export class FormularioAutoresComponent implements OnInit {

  constructor(private formBilder: FormBuilder) { }

  form: FormGroup;
  @Input()
  modelo: autorDTO;

  @Input()
  errores: string[] = [];

  @Output()
  OnSubmit: EventEmitter<creacionAutorDTO> = new EventEmitter<creacionAutorDTO>();

  ngOnInit(): void {
    this.form = this.formBilder.group({
      nombre: ['',
      {
        validators: [Validators.required]
      }],

      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string){
    this.form.get('biografia').setValue(texto);
  }

  onSubmit(){
      this.OnSubmit.emit(this.form.value);
  }
}
