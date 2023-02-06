import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  apiUrl='https://gateway.marvel.com:443/v1/public/'
  key='apikey=4d27e499d11140300d67a3411632ce67'
  constructor(private http: HttpClient) { }

  serachPersonajes(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.get(`${this.apiUrl}${'characters?'}${this.key}`)
  }

  serachPersonajesId(IdItem){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.get(`${this.apiUrl}${'characters/'}${IdItem}?${this.key}`)
  }

  serachComicsPersonaId(IdItem){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.get(`${this.apiUrl}${'characters/'}${IdItem}/${'comics'}?${this.key}`)
  }

  deatailsComic(IdItem){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.get(`${this.apiUrl}${'comics/'}${IdItem}?${this.key}`)
  }


}
