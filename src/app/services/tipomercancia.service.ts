import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipomercancia } from '../models/tipomercancia';

@Injectable({
  providedIn: 'root'
})
export class TipomercanciaService {
  private urlEndPoint:string='http://localhost:8008';
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }

  listar(): Observable< Tipomercancia[]>{
    return this.http.get< Tipomercancia[]>(this.urlEndPoint);
  }

  ver(id:number): Observable <Tipomercancia>{
    return this.http.get< Tipomercancia>(`${this.urlEndPoint}/${id}`);
  }

  crear(tipoMercancia: Tipomercancia):Observable< Tipomercancia>{
    return this.http.post< Tipomercancia>(this.urlEndPoint, tipoMercancia,{headers:this.httpHeaders});
  }

  modificar(tipoMercancia: Tipomercancia): Observable< Tipomercancia>{
    return this.http.put< Tipomercancia>(`${this.urlEndPoint}/${ tipoMercancia.idTipoMercancia}`,tipoMercancia,{headers:this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }
}
