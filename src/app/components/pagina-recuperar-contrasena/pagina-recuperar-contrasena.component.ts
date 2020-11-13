import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecoveryService } from 'src/app/services/recovery.service';

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
    console.log(this.route.snapshot.paramMap.get('tk'));
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
      }, err => console.log(err));
  }

}
