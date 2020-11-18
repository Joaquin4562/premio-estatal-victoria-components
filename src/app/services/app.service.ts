import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  // API_URL = 'http://mante.hosting.acm.org/api-congreso-victoria/src/public/';
  API_URL = 'http://plataforma.cotacyt.gob.mx/api-premio-estatal-2020/public/';
}
