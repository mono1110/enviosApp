import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Envio } from '../models/envio';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  private urlEndPoint:string='http://localhost:8002';
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }

  listar(): Observable< Envio[]>{
    return this.http.get< Envio[]>(this.urlEndPoint);
  }

  ver(id:number): Observable <Envio>{
    return this.http.get< Envio>(`${this.urlEndPoint}/${id}`);
  }

  crear(envio: Envio):Observable< Envio>{
    return this.http.post< Envio>(this.urlEndPoint, envio,{headers:this.httpHeaders});
  }

  modificar(envio: Envio): Observable< Envio>{
    return this.http.put< Envio>(`${this.urlEndPoint}/${ envio.idEnvio}`,envio,{headers:this.httpHeaders});
  }

  eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }
}
