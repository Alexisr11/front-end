import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { creacionCategoriaDTO } from '../categoria';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent{

  errores: string[] = [];
  
  constructor(private router: Router, private categoriaService: CategoriasService) { }

  guardarCambios(categoriaDto: creacionCategoriaDTO){
    this.categoriaService.crearCategoria(categoriaDto).subscribe(() => {
      this.router.navigate(["categorias"]);
    },
    //error => console.log(error)
    (error) => this.errores = parsearErroresApi(error)
    );    
  }
}
