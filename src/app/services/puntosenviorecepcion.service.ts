import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntosenviorecepcion } from '../models/puntosenviorecepcion';

@Injectable({
  providedIn: 'root'
})
export class PuntosenviorecepcionService {
  private urlEndPoint:string='http://localhost:8006';
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }

  listar(): Observable< Puntosenviorecepcion[]>{
    return this.http.get< Puntosenviorecepcion[]>(this.urlEndPoint);
  }

  ver(id:number): Observable <Puntosenviorecepcion>{
    return this.http.get< Puntosenviorecepcion>(`${this.urlEndPoint}/${id}`);
  }

  crear(puntosenviorecepcion: Puntosenviorecepcion):Observable< Puntosenviorecepcion>{
    return this.http.post< Puntosenviorecepcion>(this.urlEndPoint, puntosenviorecepcion,{headers:this.httpHeaders});
  }

  modificar(puntosenviorecepcion: Puntosenviorecepcion): Observable< Puntosenviorecepcion>{
    return this.http.put< Puntosenviorecepcion>(`${this.urlEndPoint}/${ puntosenviorecepcion.idPuntoEnvio}`,puntosenviorecepcion,{headers:this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }
}
