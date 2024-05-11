import { Routes } from '@angular/router';
import { VentaComputadorasComponent } from './venta-computadoras/venta-computadoras.component';
import { EstadosAguaComponent } from './estados-agua/estados-agua.component';
import { TiposTriangulosComponent } from './tipos-triangulos/tipos-triangulos.component';

export const routes: Routes = [
    {path: "estados-agua", component: EstadosAguaComponent},
    {path: "venta-computadoras", component: VentaComputadorasComponent},
    {path: "tipos-triangulos", component: TiposTriangulosComponent},
];
