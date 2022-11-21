import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Puntosenviorecepcion } from 'src/app/models/puntosenviorecepcion';
import { PuntosenviorecepcionService } from 'src/app/services/puntosenviorecepcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puntoenviorecepcion-form',
  templateUrl: './puntoenviorecepcion-form.component.html'
})
export class PuntoenviorecepcionFormComponent implements OnInit {

  titulo:string='Formulario puntoenviorecepcion';
  puntosenviorecepcion: Puntosenviorecepcion = new Puntosenviorecepcion();
  error: any;

  constructor(private service: PuntosenviorecepcionService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear(){
    this.service.crear(this.puntosenviorecepcion).subscribe(puntosenviorecepcion =>{
      Swal.fire('Nuevo',`puntosenviorecepcion ${puntosenviorecepcion.nombrePuntoEnvio} creado con exito!`,'success');
      // alert(`Producto ${producto.nombre} creado con exito!`);
      this.router.navigate(['/puntoenviorecepcion']);
    }, err =>{
      if (err.status === 400){
        this.error = err.error;
      }
    }
    );
  }

  editar():void{
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
          this.service.ver(id).subscribe((puntosenviorecepcion)=> this.puntosenviorecepcion = puntosenviorecepcion);
      }
    });
  }

  modificar(){
    this.service.modificar(this.puntosenviorecepcion).subscribe(puntosenviorecepcion =>{
      // alert(`Producto ${producto.nombre} actualizado con exito!`);
      Swal.fire('Modificado:',`puntosenviorecepcion ${puntosenviorecepcion.nombrePuntoEnvio} actualizado con exito!`,'success');
      this.router.navigate(['/puntoenviorecepcion']);
    }, err =>{
      if (err.status === 400){
        this.error = err.error;
      }
    }
    );
  }

}
