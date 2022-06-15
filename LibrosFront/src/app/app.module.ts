import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { MarkdownModule} from 'ngx-markdown';
import { LeafletModule} from '@asymmetrik/ngx-leaflet'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoLibrosComponent } from './libros/listado-libros/listado-libros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatirialModule } from './material/material.module';
import { MatTableModule} from '@angular/material/table';
import { MenuComponent } from './menu/menu.component';
import { BuscarLibrosComponent } from './libros/buscar-libros/buscar-libros.component';
import { ListadoCategoriasComponent } from './categoria/listado-categorias/listado-categorias.component';
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { FormularioCategoriaComponent } from './categoria/formulario-categoria/formulario-categoria.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { ListadoAutoresComponent } from './autor/listado-autores/listado-autores.component';
import { CrearAutorComponent } from './autor/crear-autor/crear-autor.component';
import { FormularioAutoresComponent } from './autor/formulario-autores/formulario-autores.component';
import { EditarAutorComponent } from './autor/editar-autor/editar-autor.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { CrearLibreriaComponent } from './librerias/crear-libreria/crear-libreria.component';
import { EditarLibreriaComponent } from './librerias/editar-libreria/editar-libreria.component';
import { FormularioLibreriaComponent } from './librerias/formulario-libreria/formulario-libreria.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { CrearLibrosComponent } from './libros/crear-libros/crear-libros.component';
import { FormularioPeliculasComponent } from './libros/formulario-libros/formulario-libros.component';
import { EditarLibrosComponent } from './libros/editar-libros/editar-libros.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoLibrosComponent,
    MenuComponent,
    BuscarLibrosComponent,
    ListadoCategoriasComponent,
    CrearCategoriaComponent,
    FormularioCategoriaComponent,
    MostrarErroresComponent,
    ListadoGenericoComponent,
    EditarCategoriaComponent,
    ListadoAutoresComponent,
    CrearAutorComponent,
    FormularioAutoresComponent,
    EditarAutorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    CrearLibreriaComponent,
    EditarLibreriaComponent,
    FormularioLibreriaComponent,
    MapaComponent,
    CrearLibrosComponent,
    FormularioPeliculasComponent,
    EditarLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatirialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    LeafletModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
