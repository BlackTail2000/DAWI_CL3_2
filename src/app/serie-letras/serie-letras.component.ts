import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-serie-letras',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './serie-letras.component.html',
  styleUrl: './serie-letras.component.scss'
})
export class SerieLetrasComponent {

  numeroLetras: NumeroLetras[] = []

  numeroLetra = {
    numero: 0,
    letra: ""
  }

  mostrarResultado: boolean = false;

  imprimirLetra(limite: number): void {

    this.numeroLetras = [];

    if (this.numeroLetra.numero < 1 || this.numeroLetra.numero > 27) {
      alert("No se pueden ingresar Números fuera del rango de valores.");
          return;
    } else {

      for(let i = 1; i <= limite; i++) {
        let letra: string;
        if(i === 27) {
           letra = "Ñ";
        } else {
          letra = this.convertirNumeroALetra(i);
        }

        this.numeroLetras.push({ numero: i, letra: letra});


  }
    this.mostrarResultado = true;
    }  
  }

  convertirNumeroALetra(numero: number) : string {
    if(numero < 1 || numero > 27) {
      return "Número fuera de rango";
    }
    if(numero === 27) {
      return "Ñ";
    }
    return String.fromCharCode(64 + numero);
  }
  }

  type NumeroLetras = {
    numero: number,
    letra: string
  }
