import { Routes } from '@angular/router';
import { VentaComputadorasComponent } from './venta-computadoras/venta-computadoras.component';
import { EstadosAguaComponent } from './estados-agua/estados-agua.component';

export const routes: Routes = [
    {path: "venta-computadoras", component: VentaComputadorasComponent},
    {path: "estados-agua", component: EstadosAguaComponent}
];
