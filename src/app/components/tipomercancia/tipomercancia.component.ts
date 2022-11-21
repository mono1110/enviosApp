import { Component, OnInit } from '@angular/core';
import { TipomercanciaService } from 'src/app/services/tipomercancia.service';
import { Tipomercancia } from 'src/app/models/tipomercancia';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipomercancia',
  templateUrl: './tipomercancia.component.html'
})
export class TipomercanciaComponent implements OnInit {

  lista:Tipomercancia[]=[];
  titulo:string='Lista de Tipomercancia';
  constructor(private service:TipomercanciaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }

  public eliminar(tipomercancia:Tipomercancia):void{
    Swal.fire({
      title: 'Alerta!',
      text: `Seguro de eliminar a ${tipomercancia.nombreTipoMercancia}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(tipomercancia.idTipoMercancia).subscribe(() =>{
          this.lista = this.lista.filter(p => p!==tipomercancia);
          //this.calcularRangos();
          Swal.fire('Eliminado:',`tipomercancia ${tipomercancia.nombreTipoMercancia} eliminado con exito`,'success');
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
