import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { TipoEmpleadoComponent } from './tipo-empleado/tipo-empleado.component';

const routes: Routes = [{path: 'empleado-component', component: EmpleadoComponent},
  {path:'tipo-empleado', component: TipoEmpleadoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
