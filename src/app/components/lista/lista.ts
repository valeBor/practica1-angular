import { Component } from '@angular/core';
import { Factura, tipoFactura } from '../../clases/factura';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
public mifactura: Factura;
public tipo: String="text";
public EtipoFactura= tipoFactura;

constructor(){

this.mifactura= new Factura(new Date(),1,tipoFactura.C,"Consumidor final")

}

mostrarLetra(valor: tipoFactura): string{
   return valor== tipoFactura.A? "A": valor==tipoFactura.B? "B":"C"
}

agregarDetalle(){
     this.mifactura.neto +=3500;
     this.mifactura.calcularTotal();

}

guardar(){
  this.mifactura
  console.info(this.mifactura);

}

}
