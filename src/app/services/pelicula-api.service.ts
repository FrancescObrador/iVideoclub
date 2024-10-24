import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaAPIService {

  APIep = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';

  constructor(private httpClient: HttpClient) { }

  getPeliculas() : any {
    return this.httpClient.get(this.APIep);
  }

  getPelicula(id: number): any {
    return this.httpClient.get(`${this.APIep}/${id}`)
  }
}
