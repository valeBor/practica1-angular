
export class Factura {

public fecha: Date;
public tipo:tipoFactura;
public numero: number=0; 
public iva: number=0;
public total: number=0;
public neto: number=0;
public receptor: string;


constructor(fecha: Date, numero:number, tipo:tipoFactura, receptor: string) {

this.fecha= fecha;
this.numero= numero;
this.receptor= receptor;
this.tipo= tipo;

}
}

 export enum tipoFactura {
A,
B, 
C
}
