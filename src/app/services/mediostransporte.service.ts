import { Injectable } from '@angular/core';Mediostransporte
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mediostransporte } from '../models/mediostransporte';

@Injectable({
  providedIn: 'root'
})
export class MediostransporteService {
  private urlEndPoint:string='http://localhost:8004';
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }

  listar(): Observable< Mediostransporte[]>{
    return this.http.get< Mediostransporte[]>(this.urlEndPoint);
  }

  ver(id:number): Observable <Mediostransporte>{
    return this.http.get< Mediostransporte>(`${this.urlEndPoint}/${id}`);
  }

  crear(mediostransporte: Mediostransporte):Observable< Mediostransporte>{
    return this.http.post< Mediostransporte>(this.urlEndPoint, mediostransporte,{headers:this.httpHeaders});
  }

  modificar(mediostransporte: Mediostransporte): Observable< Mediostransporte>{
    return this.http.put< Mediostransporte>(`${this.urlEndPoint}/${ mediostransporte.idmediotransporte}`,mediostransporte,{headers:this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }

}
