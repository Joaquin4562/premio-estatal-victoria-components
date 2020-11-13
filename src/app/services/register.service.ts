import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private appService: AppService) { }

  confirmMail(tk: string): Observable<any> {
    return this.http.post(this.appService.API_URL + 'usuarios/confirmar-cuenta', { tk });
  }
}
