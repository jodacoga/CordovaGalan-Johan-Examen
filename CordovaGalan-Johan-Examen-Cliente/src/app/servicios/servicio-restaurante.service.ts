import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from '../entidades/restaurante.entidad';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestauranteService {

  private URL:string = 'http://localhost:8080/CordovaGalan-Johan-Examen/rest/restaurante';

  constructor(private http: HttpClient) {
  }

  post(restaurante: Restaurante): Observable<any> {
    const formulario = new HttpParams()
      .set('nombre', restaurante.nombre)
      .set('direccion', restaurante.direccion)
      .set('telefono', restaurante.telefono)
      .set('aforo', restaurante.aforo);
    return this.http.post<Restaurante>(this.URL + "/crear", formulario);
  }
}
