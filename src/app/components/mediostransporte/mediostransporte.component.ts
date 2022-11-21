import { Component, OnInit } from '@angular/core';
import { Mediostransporte } from 'src/app/models/mediostransporte';
import { MediostransporteService } from 'src/app/services/mediostransporte.service';
@Component({
  selector: 'app-mediostransporte',
  templateUrl: './mediostransporte.component.html'
})
export class MediostransporteComponent implements OnInit {

  lista:Mediostransporte[]=[];
  titulo:string='Lista de Medios de transporte';
  constructor(private service:MediostransporteService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }

}
