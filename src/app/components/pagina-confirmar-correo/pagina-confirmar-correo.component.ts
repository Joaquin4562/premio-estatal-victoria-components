import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-confirmar-correo',
  templateUrl: './pagina-confirmar-correo.component.html',
  styleUrls: ['./pagina-confirmar-correo.component.scss']
})
export class PaginaConfirmarCorreoComponent implements OnInit {

  token: string;
  constructor(
    private route: ActivatedRoute,
    private registerService: RegisterService
  ) {
    this.token = this.route.snapshot.paramMap.get('tk');
  }

  ngOnInit(): void {
  }

  confirUserMail() {
    this.registerService.confirmMail(this.token)
      .subscribe(data => {
        console.log(data);
        if (!data.body) {
          Swal.fire({
            title: 'Se confirmo el correo correctamente',
            icon: 'success',
            text: 'Su correo ha sido confirmado correctamente, ahora ya puedes ingresar a la plataforma'
          });
        } else {
          Swal.fire({
            title: 'Error al confirmar',
            icon: 'error',
            text: 'Su correo ya ha sido confirmado anteriormente'
          });
        }
      }, err => console.log(err));
  }
}
