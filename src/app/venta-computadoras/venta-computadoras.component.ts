import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-venta-computadoras',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './venta-computadoras.component.html',
  styleUrl: './venta-computadoras.component.scss'
})
export class VentaComputadorasComponent {
  ventas: Venta[] = []

  venta = {
    cliente: "",
    nrocompus: 0,
    neto: 0,
    porcentajedesc: 0,
    total: 0
  }
  mostrarResultado: boolean = false;

  calcularVenta(): void {
    if(this.venta.cliente.trim() ==  "" || this.venta.cliente == null) {
      alert("Ingresar nombre del cliente");
      return;
    }
    if(this.venta.nrocompus < 1) {
      alert("Ingresar una cantidad válida de computadoras");
      return;
    }

    this.venta.neto = Number(this.venta.nrocompus) * 4000;
    this.venta.porcentajedesc = this.calcularDescuento(Number(this.venta.nrocompus));
    this.venta.total = Number(this.venta.neto) - Number(this.venta.neto * this.venta.porcentajedesc / 100);
    this.ventas.push({
      fecha: new Date(),
      cliente: this.venta.cliente,
      nrocompus: this.venta.nrocompus,
      neto: this.venta.neto,
      porcentajedesc: this.venta.porcentajedesc,
      total: this.venta.total
    });
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