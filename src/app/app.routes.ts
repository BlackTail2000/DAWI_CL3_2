import { Routes } from '@angular/router';
import { VentaComputadorasComponent } from './venta-computadoras/venta-computadoras.component';
import { TiposTriangulosComponent } from './tipos-triangulos/tipos-triangulos.component';

export const routes: Routes = [
    {path: "venta-computadoras", component: VentaComputadorasComponent},
    {path: "tipos-triangulos", component: TiposTriangulosComponent}
];
