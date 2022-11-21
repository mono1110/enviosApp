import { Component, OnInit } from '@angular/core';
import { Mediopago } from 'src/app/models/mediopago';
import { MediopagoService } from 'src/app/services/mediopago.service';
@Component({
  selector: 'app-mediopago',
  templateUrl: './mediopago.component.html'
})
export class MediopagoComponent implements OnInit {

  lista:Mediopago[]=[];
  titulo:string='Lista de Medio de pago';
  constructor(private service:MediopagoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }

}
