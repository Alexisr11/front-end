import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { categoriaDTO, creacionCategoriaDTO } from '../categoria';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  constructor(private router: Router, 
    private categoriasService: CategoriasService,
    private activatedRoute: ActivatedRoute) { }

  modelo: categoriaDTO;
  errores: string[] = [];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoriasService.buscarCAtegoriaPorId(params.id)
      .subscribe(categoria => {
        this.modelo = categoria;
      }, () => this.router.navigate(['/categorias']))
    });
  }

  guardarCambios(categoria: creacionCategoriaDTO){
      this.categoriasService.editarCategoria(this.modelo.id, categoria)
      .subscribe(() => {
        this.router.navigateByUrl('/categorias');
      }, error => this.errores = parsearErroresApi(error))
  }
}
