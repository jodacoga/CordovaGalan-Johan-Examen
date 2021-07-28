import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../entidades/cliente.entidad';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  private URL:string = 'http://localhost:8080/CordovaGalan-Johan-Examen/rest/cliente';

  constructor(private http: HttpClient) {
  }

  post(cliente: Cliente): Observable<any> {
    const formulario = new HttpParams()
      .set('cedula', cliente.cedula)
      .set('nombre', cliente.nombre)
      .set('apellido', cliente.apellido)
      .set('correo', cliente.correo)
      .set('direccion', cliente.direccion)
      .set('telefono', cliente.telefono);
    return this.http.post<Cliente>(this.URL + "/crear", formulario);
  }
}
