import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mediopago } from '../models/mediopago';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediopagoService {
  private urlEndPoint:string='http://localhost:8003';
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});

  constructor(private http:HttpClient) { }
 
  listar(): Observable<Mediopago[]>{
    return this.http.get< Mediopago []>(this.urlEndPoint);
  }

  ver(id:number): Observable< Mediopago >{
    return this.http.get< Mediopago >(`${this.urlEndPoint}/${id}`);
  }

  crear(mediopago: Mediopago):Observable<Mediopago>{
    return this.http.post< Mediopago>(this.urlEndPoint, mediopago,{headers:this.httpHeaders});
  }

  modificar(mediopago: Mediopago): Observable< Mediopago >{
    return this.http.put< Mediopago >(`${this.urlEndPoint}/${ mediopago.idMedioPago}`,mediopago,{headers:this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }

}
