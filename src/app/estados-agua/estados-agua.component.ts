import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-estados-agua',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './estados-agua.component.html',
  styleUrl: './estados-agua.component.scss'
})
export class EstadosAguaComponent {
  estadoAgua = {
    temperatura: 0,
    resultado: ""
  }
  mostrarResultado = false;
}
