import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoriaDTO, creacionCategoriaDTO } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + 'categorias';

  public obtenerTodos(pagina: number, cantidadElementosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('registrosPorPagina', cantidadElementosAMostrar.toString());
    return this.http.get<categoriaDTO[]>(this.apiUrl, {observe: 'response', params});
  }

  public buscarCAtegoriaPorId(id: number): Observable<categoriaDTO>{
      return this.http.get<categoriaDTO>(`${this.apiUrl}/${id}`);
  }
  public crearCategoria(categoria: creacionCategoriaDTO){
      return this.http.post(this.apiUrl, categoria);
  }

  public editarCategoria(id: number, creacionCategoriaDto: creacionCategoriaDTO){
      return this.http.put(`${this.apiUrl}/${id}`, creacionCategoriaDto);
  }

  public borrarCategoria(id: number){
      return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
