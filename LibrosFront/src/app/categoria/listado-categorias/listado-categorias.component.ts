import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { categoriaDTO } from '../categoria';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {


  categoriasDto: categoriaDTO[];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadDeRegisrtosAMostrar = 5;

  columnasAMostrar = ['id','nombre', 'acciones'];

  constructor(private serviceCategoria: CategoriasService) { }

  ngOnInit(): void {
    this.mostrarRegisros(this.paginaActual, this.cantidadDeRegisrtosAMostrar);
  }

  mostrarRegisros(pagina: number, cantidadElementosAMostrar: number){
    this.serviceCategoria.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<categoriaDTO[]>) => {
      this.categoriasDto = respuesta.body;
      console.log(respuesta.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
      //console.log(categorias);
    }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadDeRegisrtosAMostrar = datos.pageSize;
    this.mostrarRegisros(this.paginaActual, this.cantidadDeRegisrtosAMostrar);
  }

  borrar(id: number){
    this.serviceCategoria.borrarCategoria(id)
    .subscribe( () =>{
      this.mostrarRegisros(this.paginaActual, this.cantidadDeRegisrtosAMostrar);
    }, error => console.log(error));
  }
}
