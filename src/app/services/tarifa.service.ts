import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/tarifa';
@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  private urlEndPoint:string='http://localhost:8007';
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }

  listar(): Observable< Tarifa[]>{
    return this.http.get< Tarifa[]>(this.urlEndPoint);
  }

  ver(id:number): Observable <Tarifa>{
    return this.http.get< Tarifa>(`${this.urlEndPoint}/${id}`);
  }

  crear(tarifa: Tarifa):Observable< Tarifa>{
    return this.http.post< Tarifa>(this.urlEndPoint, tarifa,{headers:this.httpHeaders});
  }

  modificar(tarifa: Tarifa): Observable< Tarifa>{
    return this.http.put< Tarifa>(`${this.urlEndPoint}/${ tarifa.idTarifa}`,tarifa,{headers:this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }
}
