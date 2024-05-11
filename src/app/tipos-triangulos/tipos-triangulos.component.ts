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

  
}