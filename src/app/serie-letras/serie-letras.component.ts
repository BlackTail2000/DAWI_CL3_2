import { Component } from '@angular/core';

@Component({
  selector: 'app-serie-letras',
  standalone: true,
  imports: [],
  templateUrl: './serie-letras.component.html',
  styleUrl: './serie-letras.component.scss'
})
export class SerieLetrasComponent {

  numeroLetras: NumeroLetras[] = []
}

type NumeroLetras = {
  numero: number,
  letra: string
}
