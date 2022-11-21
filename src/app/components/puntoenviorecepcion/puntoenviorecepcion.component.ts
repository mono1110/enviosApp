import { Component, OnInit } from '@angular/core';
import { Puntosenviorecepcion } from 'src/app/models/puntosenviorecepcion';
import { PuntosenviorecepcionService } from 'src/app/services/puntosenviorecepcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puntoenviorecepcion',
  templateUrl: './puntoenviorecepcion.component.html'
})
export class PuntoenviorecepcionComponent implements OnInit {

  lista:Puntosenviorecepcion[]=[];
  titulo:string='Lista de Puntoenviorecepcion';
  constructor(private service:PuntosenviorecepcionService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }

  public eliminar(puntosenviorecepcion:Puntosenviorecepcion):void{
    Swal.fire({
      title: 'Alerta!',
      text: `Seguro de eliminar a ${puntosenviorecepcion.nombrePuntoEnvio}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(puntosenviorecepcion.idPuntoEnvio).subscribe(() =>{
          this.lista = this.lista.filter(p => p!==puntosenviorecepcion);
          //this.calcularRangos();
          Swal.fire('Eliminado:',`puntosenviorecepcion ${puntosenviorecepcion.nombrePuntoEnvio} eliminado con exito`,'success');
          // alert(`Producto ${producto.nombre} eliminado con exito`);
        });
      }
    })

    // if(confirm(`Seguro de eliminar a ${producto.nombre}?`)){
    //   this.service.eliminar(producto.id).subscribe(() =>{
    //     this.lista = this.lista.filter(p => p!==producto);
    //     Swal.fire('Eliminado:',`Producto ${producto.nombre} eliminado con exito`,'success');
    //     // alert(`Producto ${producto.nombre} eliminado con exito`);
    //   });
    // }
  }

}
