import { Tipomercancia } from "./tipomercancia";
import { Tarifa } from "./tarifa";
import { Envio } from "./envio";

export class Paquete {
    idPaquete:number=0 ;
	peso:number=0 ;
	alto:number=0;
	ancho:number=0 ;
	largo:number=0;
	precio:number=0;

	tipoMercancia: Tipomercancia = new Tipomercancia();
	tarifa: Tarifa = new Tarifa();
	envio: Envio = new Envio();

}
