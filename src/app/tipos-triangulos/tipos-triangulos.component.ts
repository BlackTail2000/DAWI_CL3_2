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

}

type Triangulo = {
  longitud1: number,
  longitud2: number,
  longitud3: number,
  tipo: string
}