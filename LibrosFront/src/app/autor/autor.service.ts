import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { creacionAutorDTO } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl + 'autores';

  public crear(autor: creacionAutorDTO){
    return this.http.post(this.apiUrl, autor);
  }
}
