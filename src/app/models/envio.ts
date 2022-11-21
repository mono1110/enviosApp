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
	
	mediopago: Mediopago = new Mediopago();	

	mediostransporte: Mediostransporte = new Mediostransporte();
	
	cliente: Cliente = new Cliente();

	puntosEnvioRecepcion:Puntosenviorecepcion[]=[];
	
	paquetes:Paquete[]=[];

}
