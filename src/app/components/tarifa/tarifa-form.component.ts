import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarifa-form',
  templateUrl: './tarifa-form.component.html'
})
export class TarifaFormComponent implements OnInit {

  titulo:string='Formulario Tarifa';
  tarifa: Tarifa = new Tarifa();
  error: any;

  constructor(private service:TarifaService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear(){
    this.service.crear(this.tarifa).subscribe(tarifa =>{
      Swal.fire('Nuevo',`tarifa ${tarifa.categoria} creado con exito!`,'success');
      // alert(`Producto ${producto.nombre} creado con exito!`);
      this.router.navigate(['/tarifa']);
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
          this.service.ver(id).subscribe((tarifa)=> this.tarifa = tarifa);
      }
    });
  }

  modificar(){
    this.service.modificar(this.tarifa).subscribe(tarifa =>{
      // alert(`Producto ${producto.nombre} actualizado con exito!`);
      Swal.fire('Modificado:',`tarifa ${tarifa.categoria} actualizado con exito!`,'success');
      this.router.navigate(['/tarifa']);
    }, err =>{
      if (err.status === 400){
        this.error = err.error;
      }
    }
    );
  }

}
