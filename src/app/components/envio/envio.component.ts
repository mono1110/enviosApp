import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/models/envio';
import { EnvioService } from 'src/app/services/envio.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html'
})
export class EnvioComponent implements OnInit {

  lista:Envio[]=[];
  titulo:string='Lista de Envio';
  constructor(private service:EnvioService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }
}
