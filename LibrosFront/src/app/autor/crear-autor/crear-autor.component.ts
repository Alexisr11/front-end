import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { environment } from 'src/environments/environment';
import { creacionAutorDTO } from '../autor';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.css']
})
export class CrearAutorComponent implements OnInit {

  constructor(private autorService: AutorService, private router: Router) { }

  ngOnInit(): void {
  }

  errores = [];

  guardarCambios(autor: creacionAutorDTO){
    return this.autorService.crear(autor)
    .subscribe(() => {
      this.router.navigate(['/actores']);
    }, errores => this.errores = parsearErroresApi(errores))
  }
}
