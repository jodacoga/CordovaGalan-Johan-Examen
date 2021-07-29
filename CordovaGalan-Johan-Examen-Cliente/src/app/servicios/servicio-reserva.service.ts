import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../entidades/reserva.entidad';

@Injectable({
  providedIn: 'root'
})
export class ServicioReservaService {
  
  private URL:string = 'http://localhost:8080/CordovaGalan-Johan-Examen/rest/reserva';

  constructor(private http: HttpClient) {
  }

  post(reserva: Reserva): Observable<any> {
    return this.http.post(this.URL + "/crear", reserva);
  }

  getCliente(cedula: string): Observable<any> {
    return this.http.get(this.URL + "/buscar-cliente/" + cedula)
  }

  getRestaurante(nombre: string): Observable<any> {
    return this.http.get(this.URL + "/buscar-restaurante/" + nombre)
  }
}
