import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaginaRecuperarContrasenaComponent } from './components/pagina-recuperar-contrasena/pagina-recuperar-contrasena.component';
import { PaginaConfirmarCorreoComponent } from './components/pagina-confirmar-correo/pagina-confirmar-correo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginaRecuperarContrasenaComponent,
    PaginaConfirmarCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
