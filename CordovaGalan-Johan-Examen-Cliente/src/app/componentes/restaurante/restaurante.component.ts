import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/entidades/restaurante.entidad';
import { ServicioRestauranteService } from 'src/app/servicios/servicio-restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private servicio: ServicioRestauranteService) {
    this.restaurante = new Restaurante();
  }

  ngOnInit(): void {
  }

  crear(): void {
    let numeroValidacionesIncorrectas = 0;
    if (this.restaurante.nombre != '' && this.restaurante.nombre
      && this.restaurante.direccion && this.restaurante.telefono
      && this.restaurante.aforo) {
        if (!this.validarContieneLetras(this.restaurante.nombre)) {
          alert('¡El nombre solo permite letras!')
          numeroValidacionesIncorrectas += 1;
        }
        if (!this.validarContieneNumeros(this.restaurante.telefono)) {
          alert('¡El teléfono solo permite valores numéricos!')
          numeroValidacionesIncorrectas += 1;
        } 
        if (numeroValidacionesIncorrectas == 0) {
          this.servicio.post(this.restaurante).subscribe(
            data => {
              alert('¡Su restaurante ha sido registrado exitosamente!');
              this.restaurante = new Restaurante();
            },
            error => alert('¡Ya existe un restaurante con este nombre!')
          );
        }
    } else {
      alert('¡Debe llenar todos los campos del formulario!');
    }
  }

  validarContieneNumeros(texto: string): boolean {
    const patron = /^[0-9]+$/
    return patron.test(texto);
}

validarContieneLetras(texto: string): boolean {
    const patron = /^[ A-Za-z]+$/
    return patron.test(texto)
}

}
