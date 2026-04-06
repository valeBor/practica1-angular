import { Component } from '@angular/core';
import { Factura, tipoFactura } from '../../clases/factura';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Detallefactura } from '../../clases/detallefactura';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
public mifactura: Factura;
public tipo: string="text";
public EtipoFactura= tipoFactura;
public claseCuerpo: string='cuerpo';

constructor(){

this.mifactura= new Factura(new Date(),1,tipoFactura.C,"Consumidor final")

}

mostrarLetra(valor: tipoFactura): string{
   return valor== tipoFactura.A? "A": valor==tipoFactura.B? "B":"C"
}

agregarDetalle(){
     this.mifactura.items.push(
      <Detallefactura>{cantidad: this.mifactura.items.length+1, descripcion:'producto 1', precioUnitario:25000});
     
     this.mifactura.calcularTotal();

}

guardar(){
  this.mifactura
  console.info(this.mifactura);

}

cambiarFondo(){
   this.claseCuerpo=this.mifactura.tipo==this.EtipoFactura.A?'cuerpoContraste':this.mifactura.tipo==this.EtipoFactura.B?'cuerpoPastel':'cuerpo';

}

}
