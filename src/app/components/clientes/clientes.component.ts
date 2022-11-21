import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  lista: Cliente[]=[];
  titulo:string='Lista de Clientes';
  constructor(private service:ClienteService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }

}
