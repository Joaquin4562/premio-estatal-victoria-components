import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaRecuperarContrasenaComponent } from './components/pagina-recuperar-contrasena/pagina-recuperar-contrasena.component';
import { PaginaConfirmarCorreoComponent } from './components/pagina-confirmar-correo/pagina-confirmar-correo.component';


const routes: Routes = [
  {
    path: 'pagina-recuperar-contrasena/:tk',
    component: PaginaRecuperarContrasenaComponent
  },
  {
    path: 'pagina-confirmar-correo/:tk',
    component: PaginaConfirmarCorreoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
