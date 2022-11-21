import { Component, OnInit } from '@angular/core';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html'
})
export class TarifaComponent implements OnInit {

  lista:Tarifa[]=[];
  titulo:string='Lista de Tarifa';
  constructor(private service:TarifaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(lista=> this.lista=lista);
  }

  public eliminar(tarifa:Tarifa):void{
    Swal.fire({
      title: 'Alerta!',
      text: `Seguro de eliminar a ${tarifa.categoria}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(tarifa.idTarifa).subscribe(() =>{
          this.lista = this.lista.filter(p => p!==tarifa);
          //this.calcularRangos();
          Swal.fire('Eliminado:',`tarifa ${tarifa.categoria} eliminado con exito`,'success');
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
