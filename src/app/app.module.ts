import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { TipoEmpleadoComponent } from './tipo-empleado/tipo-empleado.component';
import { MenuComponent } from './menu/menu.component';
import {Routes, RouterModule} from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

const appRoutes: Routes = [
      {path: '', component: MenuComponent},
      {path:'menu', component: MenuComponent},
      {path: 'agregar-archivo', component: EmpleadoComponent},
      {path: 'tipo-empleado', component: TipoEmpleadoComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    TipoEmpleadoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
