import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarLibrosComponent } from './libros/buscar-libros/buscar-libros.component';
import { ListadoLibrosComponent } from './libros/listado-libros/listado-libros.component';
import { ListadoCategoriasComponent} from './categoria/listado-categorias/listado-categorias.component';
import { CrearCategoriaComponent} from './categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent} from './categoria/editar-categoria/editar-categoria.component';
import { ListadoAutoresComponent} from './autor/listado-autores/listado-autores.component';
import { CrearAutorComponent} from './autor/crear-autor/crear-autor.component';
import { EditarAutorComponent} from './autor/editar-autor/editar-autor.component';
import { CrearLibreriaComponent} from './librerias/crear-libreria/crear-libreria.component';
import { EditarLibreriaComponent} from './librerias/editar-libreria/editar-libreria.component';
import { CrearLibrosComponent} from './libros/crear-libros/crear-libros.component';
import { EditarLibrosComponent} from './libros/editar-libros/editar-libros.component';

const routes: Routes = [
  {path: 'libros', component: ListadoLibrosComponent},
  {path: 'libros/buscar', component: BuscarLibrosComponent},
  {path: 'categorias', component: ListadoCategoriasComponent},
  {path: 'categoria/crear-categoria', component: CrearCategoriaComponent},
  {path: 'categoria/editar-categoria/:id', component: EditarCategoriaComponent},
  {path: 'autor/listado-autores', component: ListadoAutoresComponent},
  {path: 'autor/crear-autor', component: CrearAutorComponent},
  {path: 'autor/editar-autor/:id', component: EditarAutorComponent},
  {path: 'librerias', component: CrearLibreriaComponent},
  {path: 'librerias/editar-libreria/:id', component: EditarLibreriaComponent},
  {path: 'libros/crear-libro', component: CrearLibrosComponent},
  {path: 'libros/editar-libro/:id', component: EditarLibrosComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
