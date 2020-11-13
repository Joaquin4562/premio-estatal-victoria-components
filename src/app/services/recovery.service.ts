import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  constructor(private http: HttpClient, private appConfig: AppService) { }

  changePass(body: any): Observable<any> {
    return this.http.post(this.appConfig.API_URL + 'usuarios/cambiar-contrasena', body);
  }
}
