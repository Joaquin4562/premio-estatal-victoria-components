import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecoveryService } from 'src/app/services/recovery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-recuperar-contrasena',
  templateUrl: './pagina-recuperar-contrasena.component.html',
  styleUrls: ['./pagina-recuperar-contrasena.component.scss']
})
export class PaginaRecuperarContrasenaComponent implements OnInit {

  token: string;
  formCambiarPass: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recoveryService: RecoveryService,
    private fb: FormBuilder
  ) {
    this.token = this.route.snapshot.paramMap.get('tk');
    this.formCambiarPass = this.fb.group({
      contrasena: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  changeUserPass() {
    const tk = this.token;
    const body = {
      tk,
      contrasena: [this.formCambiarPass.value.contrasena]
    };
    this.recoveryService.changePass(body)
      .subscribe(data => {
        console.log(data);
        if (!data.body) {
          Swal.fire({
            title: 'Se cambio correctamente la contraseña',
            icon: 'success',
            text: 'Su contraseña ha sido remplazada correctamente en la plataforma'
          });
        } else {
          Swal.fire({
            title: 'Error al cambiar contraseña',
            icon: 'error',
            text: 'Ocurrio un error al cambiar la contraseña'
          });
        }
      }, err => console.log(err));
  }

}
