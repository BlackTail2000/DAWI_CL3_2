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
    porcentajedesc: 0,
    total: 0
  }
  mostrarResultado: boolean = false;

  calcularVenta(): void {
    this.venta.neto = Number(this.venta.nrocompus) * 4000;
    this.venta.porcentajedesc = this.calcularDescuento(Number(this.venta.nrocompus));
    this.venta.total = Number(this.venta.neto) - Number(this.venta.neto * this.venta.porcentajedesc / 100);
    this.venta.fecha = new Date();
    this.ventas.push(this.venta);
    this.mostrarResultado = true;
  }

  calcularDescuento(nrocompus: number): number {
    if(nrocompus < 5)
      return 10;
    else if(nrocompus < 10)
      return 20;
    else
    return 40;
  }

}
type Venta = {
  fecha: Date, 
  cliente: string, 
  nrocompus: number,
  neto: number,
  porcentajedesc: number,
  total: number
}