import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entidades/cliente.entidad';
import { ServicioClienteService } from 'src/app/servicios/servicio-cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente

  constructor(private servicio: ServicioClienteService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  crear(): void {
    let totaValidacionesIncorrectas = 0;
    if (this.cliente.cedula != '' && this.cliente.nombre != '' 
      && this.cliente.apellido != '' && this.cliente.correo != '' 
      && this.cliente.direccion != '' && this.cliente.telefono != '') {
        if (!this.validarContieneNumeros(this.cliente.telefono)) {
          alert('¡El teléfono solo permite valores numéricos!')
          totaValidacionesIncorrectas += 1;
        }
        if (!this.validarContieneNumeros(this.cliente.cedula)) {
          alert('¡La cédula solo permite valores numéricos!')
          totaValidacionesIncorrectas += 1;
        }
        if (totaValidacionesIncorrectas == 0) {
          if (this.validarCedula(this.cliente.cedula)) {
            this.servicio.post(this.cliente).subscribe(
              data => {
                alert('¡Usted ha sido registrado exitosamente!');
                this.cliente = new Cliente();
              },
              error => alert('¡Ya existe un cliente esta cédula!')
            )
          } else {
            alert('¡La cédula ingresada no es válida!');
          }
        }
    } else {
      alert('¡Debe llenar todos los campos del formulario!')
    }
  }

  validarCedula(cedula: string): boolean {
    if (cedula.length != 10) {
      return false;
    }
    let suma = 0;
    let verificador = 0;
    for (let i = 0; i < cedula.length - 1; i++) {
      let resultado = parseInt(cedula[i]);
      if (i % 2 == 0) {
        resultado *= 2;
        if (resultado > 9) {
          suma += (resultado - 9);
        } else {
          suma += resultado;
        }
      } else {
        suma += resultado;
      }
    }
    verificador = ((parseInt(suma.toString()[0]) + 1) * 10) - suma;
    if (verificador == 10) {
      verificador = 0;
    }
    return verificador === parseInt(cedula[9]);
  }

  validarContieneNumeros(texto: string): boolean {
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < texto.length; i++) {
      if (!numeros.includes(texto[i])) {
        return false;
      }
    }
    return true;
  }
}
