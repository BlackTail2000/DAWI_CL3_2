import { Component } from '@angular/core';

@Component({
  selector: 'app-venta-computadoras',
  standalone: true,
  imports: [],
  templateUrl: './venta-computadoras.component.html',
  styleUrl: './venta-computadoras.component.scss'
})
export class VentaComputadorasComponent {
  ventas: Venta[] = []

  venta: Venta = {
    fecha: new Date(),
    cliente: "",
    nrocompus: 0,
    neto: 0,
    descuento: 0,
    total: 0
  }
  mostrarResultado: boolean = false;


}
type Venta = {
  fecha: Date, 
  cliente: string, 
  nrocompus: number,
  neto: number,
  descuento: number,
  total: number
}