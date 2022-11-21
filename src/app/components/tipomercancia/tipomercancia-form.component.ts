import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipomercancia } from 'src/app/models/tipomercancia';
import { TipomercanciaService } from 'src/app/services/tipomercancia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipomercancia-form',
  templateUrl: './tipomercancia-form.component.html'
})
export class TipomercanciaFormComponent implements OnInit {
  titulo:string='Formulario Tipo Mercancia';
  tipomercancia:Tipomercancia = new Tipomercancia();
  error: any;

  constructor(private service:TipomercanciaService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear(){
    this.service.crear(this.tipomercancia).subscribe(tipomercancia =>{
      Swal.fire('Nuevo',`Tipomercancia ${tipomercancia.nombreTipoMercancia} creado con exito!`,'success');
      // alert(`Producto ${producto.nombre} creado con exito!`);
      this.router.navigate(['/tipomercancia']);
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
          this.service.ver(id).subscribe((tipomercancia)=> this.tipomercancia = tipomercancia);
      }
    });
  }

  modificar(){
    this.service.modificar(this.tipomercancia).subscribe(tipomercancia =>{
      // alert(`Producto ${producto.nombre} actualizado con exito!`);
      Swal.fire('Modificado:',`Tipomercancia ${tipomercancia.nombreTipoMercancia} actualizado con exito!`,'success');
      this.router.navigate(['/tipomercancia']);
    }, err =>{
      if (err.status === 400){
        this.error = err.error;
      }
    }
    );
  }

}
