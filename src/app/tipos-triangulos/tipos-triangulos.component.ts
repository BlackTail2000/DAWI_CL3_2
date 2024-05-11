import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tipos-triangulos',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './tipos-triangulos.component.html',
  styleUrl: './tipos-triangulos.component.scss'
})
export class TiposTriangulosComponent {

  triangulos: Triangulo[] = []

  triangulo = {
    longitud1: 0,
    longitud2: 0,
    longitud3: 0,
    tipo: ""
}
mostrarResultado: boolean = false;

calcularLongitud(): void {
  if (this.triangulo.longitud1 < 0 || this.triangulo.longitud2 < 0 || this.triangulo.longitud3 < 0) {
    alert("No se pueden ingresar longitudes negativas."); // Mensaje para el usuario
        return; 
} else {
  if (this.triangulo.longitud1 == this.triangulo.longitud2 && this.triangulo.longitud2 == this.triangulo.longitud3) {
    this.triangulo.tipo = "Equilátero";
} else if (this.triangulo.longitud1 === this.triangulo.longitud2 || this.triangulo.longitud1 === this.triangulo.longitud3 || this.triangulo.longitud2 === this.triangulo.longitud3) {
    this.triangulo.tipo = "Isósceles";
} else {
    this.triangulo.tipo = "Escaleno";
}}
  this.triangulos.push({

    longitud1: this.triangulo.longitud1,
    longitud2: this.triangulo.longitud2,
    longitud3: this.triangulo.longitud3,
    tipo: this.triangulo.tipo

  });

  this.mostrarResultado = true;
}
}

type Triangulo = {
  longitud1: number,
  longitud2: number,
  longitud3: number,
  tipo: string
}