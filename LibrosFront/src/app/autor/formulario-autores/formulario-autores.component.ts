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

  @Output()
  submit: EventEmitter<creacionAutorDTO> = new EventEmitter<creacionAutorDTO>();

  ngOnInit(): void {
    this.form = this.formBilder.group({
      nombre: ['',
      {
        validators: [Validators.required]
      }],

      fechaNacimiento: '',
      foto: ''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

  onSubmit(){
      this.submit.emit(this.form.value);
  }
}
