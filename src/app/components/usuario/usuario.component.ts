import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  lista:Usuario[]=[];
  titulo:string='Lista de Usuario';
  constructor(private service:UsuarioService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }

}
