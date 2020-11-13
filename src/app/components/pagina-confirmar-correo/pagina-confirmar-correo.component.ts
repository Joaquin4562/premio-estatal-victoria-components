import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

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
    console.log(this.route.snapshot.paramMap.get('tk'));
    this.token = this.route.snapshot.paramMap.get('tk');
  }

  ngOnInit(): void {
  }

  confirUserMail() {
    this.registerService.confirmMail(this.token)
      .subscribe(data => {
        console.log(data);
      }, err => console.log(err));
  }
}
