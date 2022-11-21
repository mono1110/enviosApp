import { Usuario } from "./usuario";
import { Mediopago } from "./mediopago";
import { Mediostransporte } from "./mediostransporte";
import { Cliente } from "./cliente";
import { Puntosenviorecepcion } from "./puntosenviorecepcion";
import { Paquete } from "./paquete";

export class Envio {

    idEnvio:number=0 ;

	nombreDestinatario:string='';

	fecha:string='';

	usuario: Usuario = new Usuario();	
	
	medioPago: Mediopago = new Mediopago();	

	mediosTransporte: Mediostransporte = new Mediostransporte();
	
	cliente: Cliente = new Cliente();

	puntosenviorecepcion:Puntosenviorecepcion[]=[];
	
	paquetes:Paquete[]=[];

}
